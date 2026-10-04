import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef(null);
  const headerRef = useRef(null);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape" && menuOpen) {
        closeMenu();
        toggleRef.current.focus();
      }
    }
    function handleOutsideClick(event) {
      if (!headerRef.current.contains(event.target)) closeMenu();
    }
    const breakpoint = matchMedia("(min-width: 651px)");
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleOutsideClick);
    breakpoint.addEventListener("change", closeMenu);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleOutsideClick);
      breakpoint.removeEventListener("change", closeMenu);
    };
  }, [menuOpen]);

  return (
    <header className="site-header" ref={headerRef}>
      {" "}
      <div className="header-inner wrap">
        {" "}
        <a className="brand" href="#home" aria-label="Гюльзар — на главную">
          <span>
            {"Гюльзар"}
            <span className="brand-dot">{"."}</span>
          </span>
          <small>{"ПСИХОЛОГ-СЕКСОЛОГ"}</small>
        </a>{" "}
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="navigation"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          ref={toggleRef}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {" "}
          <span></span>
          <span></span>{" "}
        </button>{" "}
        <nav
          id="navigation"
          className={`navigation${menuOpen ? " is-open" : ""}`}
          aria-label="Основная навигация"
          onClick={closeMenu}
        >
          {" "}
          <a href="#about">{"Обо мне"}</a>
          <a href="#products">{"Программы"}</a>
          <a href="#rec770352376">{"Наставничество"}</a>
          <a href="#rec766994231">{"Отзывы"}</a>{" "}
          <a className="header-book" href="#rec766772960">
            {"Записаться "}
            <svg aria-hidden="true" className="icon">
              <use href="#arrow"></use>
            </svg>
          </a>{" "}
        </nav>{" "}
      </div>{" "}
    </header>
  );
}
