import { parse } from "parse5";

export function snapshot(html) {
  const document = parse(html);
  const body = document.childNodes
    .find((node) => node.tagName === "html")
    .childNodes.find((node) => node.tagName === "body");
  function visit(node) {
    if (node.nodeName === "#text") {
      const text = node.value.replace(/[ \t\r\n\f]+/g, " ");
      return text.trim() ? { text } : null;
    }
    if (!node.tagName || node.tagName === "link") return null;
    return {
      tag: node.tagName,
      attrs: Object.fromEntries(
        node.attrs.map(({ name, value }) => [name, value]).sort(),
      ),
      children: (node.childNodes || []).map(visit).filter(Boolean),
    };
  }
  return body.childNodes.map(visit).filter(Boolean);
}
