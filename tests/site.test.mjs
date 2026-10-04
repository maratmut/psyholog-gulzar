import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { test } from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";
import { snapshot } from "./page-snapshot.mjs";

const original = JSON.parse(
  readFileSync(
    new URL("./fixtures/original-site.json", import.meta.url),
    "utf8",
  ),
);
const hash = (file) =>
  createHash("sha256").update(readFileSync(file)).digest("hex");

test("React preserves the approved page structure, texts, links and image attributes", async () => {
  assert.ok(existsSync("src/App.jsx"), "The site must have a React App entry");
  const server = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
  });
  try {
    const { default: App } = await server.ssrLoadModule("/src/App.jsx");
    const rendered = renderToStaticMarkup(createElement(App));
    mkdirSync(".verification", { recursive: true });
    writeFileSync(
      ".verification/rendered.html",
      `<html><body>${rendered}</body></html>`,
    );
    assert.deepEqual(
      snapshot(`<html><body>${rendered}</body></html>`),
      original.page,
    );
  } finally {
    await server.close();
  }
});

test("The approved CSS is unchanged", () => {
  assert.equal(hash("src/styles.css"), original.css);
});

test("All original local assets retain their exact bytes", () => {
  for (const [file, expected] of Object.entries(original.assets)) {
    assert.equal(hash(`public/${file}`), expected, file);
  }
});
