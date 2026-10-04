const toggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");

function closeMenu() {
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Открыть меню");
  navigation.classList.remove("is-open");
}

toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") !== "true";
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
  navigation.classList.toggle("is-open", open);
});
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    toggle.getAttribute("aria-expanded") === "true"
  ) {
    closeMenu();
    toggle.focus();
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".header-inner")) closeMenu();
});
matchMedia("(min-width: 651px)").addEventListener("change", closeMenu);

const rail = document.querySelector("#reviews-rail");
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
document.querySelectorAll("[data-scroll]").forEach((button) => {
  button.addEventListener("click", () => {
    const direction = button.dataset.scroll === "next" ? 1 : -1;
    rail.scrollBy({
      left: rail.clientWidth * direction,
      behavior: reducedMotion.matches ? "instant" : "smooth",
    });
  });
});

const dialog = document.querySelector("#image-dialog");
const dialogImage = document.querySelector("#dialog-image");
const counter = document.querySelector("#image-counter");
const previous = document.querySelector("#image-prev");
const next = document.querySelector("#image-next");
const galleryButtons = Array.from(document.querySelectorAll("[data-gallery]"));
let currentGallery = [];
let currentIndex = 0;
let opener;

function showImage(index) {
  currentIndex = (index + currentGallery.length) % currentGallery.length;
  const source = currentGallery[currentIndex];
  dialogImage.src = source.dataset.image;
  document.querySelector("#image-original").href = source.dataset.image;
  dialogImage.alt = source.querySelector("img").alt;
  counter.textContent = `${source.dataset.gallery === "reviews" ? "Отзыв" : "Фотография"} ${currentIndex + 1} из ${currentGallery.length}`;
}

galleryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    opener = button;
    currentGallery = galleryButtons.filter(
      (item) => item.dataset.gallery === button.dataset.gallery,
    );
    showImage(currentGallery.indexOf(button));
    dialog.showModal();
    document.querySelector("#image-close").focus();
  });
});
previous.addEventListener("click", () => showImage(currentIndex - 1));
next.addEventListener("click", () => showImage(currentIndex + 1));
document
  .querySelector("#image-close")
  .addEventListener("click", () => dialog.close());
dialog.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    showImage(currentIndex - 1);
  }
  if (event.key === "ArrowRight") {
    event.preventDefault();
    showImage(currentIndex + 1);
  }
});
dialog.addEventListener("click", (event) => {
  const bounds = dialog.getBoundingClientRect();
  if (
    event.target === dialog &&
    (event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom)
  )
    dialog.close();
});
dialog.addEventListener("close", () => opener?.focus());

// Existing links to the former Tilda sections remain useful after migration.
const legacyAnchors = {
  rec766786929: "home",
  rec2226318861: "bundle",
  rec2331192831: "club",
  rec3131244001: "weight",
  rec766997420: "channel-title",
  rec766991256: "rec766994231",
  rec2342547831: "results",
  rec2342558491: "results",
  rec767039401: "contacts",
};
function followLegacyAnchor() {
  const destination = legacyAnchors[location.hash.slice(1)];
  const target = destination && document.getElementById(destination);
  if (!target) return;
  for (let ancestor = target; ancestor; ancestor = ancestor.parentElement) {
    if (ancestor.tagName === "DETAILS") ancestor.open = true;
  }
  target.scrollIntoView({ behavior: "instant" });
}
addEventListener("hashchange", followLegacyAnchor);
if (location.hash) followLegacyAnchor();
