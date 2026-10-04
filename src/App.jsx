import { useRef, useState } from "react";
import Icons from "./components/Icons.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Path from "./components/Path.jsx";
import About from "./components/About.jsx";
import Products from "./components/Products.jsx";
import Mentoring from "./components/Mentoring.jsx";
import Consultation from "./components/Consultation.jsx";
import Reviews from "./components/Reviews.jsx";
import Channel from "./components/Channel.jsx";
import Footer from "./components/Footer.jsx";
import ImageDialog from "./components/ImageDialog.jsx";
import useSectionAnchors from "./hooks/useSectionAnchors.js";

export default function App() {
  const [gallery, setGallery] = useState(null);
  const openerRef = useRef(null);
  useSectionAnchors();

  function handleContentClick(event) {
    const button = event.target.closest(
      "button[data-gallery], button[data-scroll]",
    );
    if (!button) return;
    if (button.dataset.scroll) {
      const rail = document.getElementById("reviews-rail");
      const direction = button.dataset.scroll === "next" ? 1 : -1;
      rail.scrollBy({
        left: rail.clientWidth * direction,
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
      return;
    }
    const buttons = Array.from(
      event.currentTarget.querySelectorAll("[data-gallery]"),
    ).filter((item) => item.dataset.gallery === button.dataset.gallery);
    openerRef.current = button;
    setGallery({
      type: button.dataset.gallery,
      index: buttons.indexOf(button),
      images: buttons.map((item) => ({
        src: item.dataset.image,
        alt: item.querySelector("img").alt,
      })),
    });
  }

  function moveImage(direction) {
    setGallery((current) => ({
      ...current,
      index:
        (current.index + direction + current.images.length) %
        current.images.length,
    }));
  }

  function closeGallery() {
    setGallery(null);
    openerRef.current?.focus();
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Перейти к содержимому
      </a>
      <Icons />
      <Header />
      <main id="main" onClick={handleContentClick}>
        <Hero />
        <Path />
        <About />
        <Products />
        <Mentoring />
        <Consultation />
        <Reviews />
        <Channel />
      </main>
      <Footer />
      <ImageDialog
        gallery={gallery}
        onMove={moveImage}
        onClose={closeGallery}
      />
    </>
  );
}
