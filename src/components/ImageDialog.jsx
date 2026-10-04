import { useEffect, useRef } from "react";

export default function ImageDialog({ gallery, onMove, onClose }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const isOpen = gallery !== null;
  const image = gallery?.images[gallery.index];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen) {
      dialog.showModal();
      closeRef.current.focus();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  function handleKeyDown(event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      onMove(event.key === "ArrowLeft" ? -1 : 1);
    }
  }

  function handleBackdropClick(event) {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    ) {
      dialogRef.current.close();
    }
  }

  return (
    <dialog
      id="image-dialog"
      className="image-dialog"
      aria-label="Просмотр изображения"
      ref={dialogRef}
      onClose={onClose}
      onKeyDown={handleKeyDown}
      onClick={handleBackdropClick}
    >
      <div className="lightbox-toolbar">
        <span id="image-counter" aria-live="polite">
          {gallery
            ? `${gallery.type === "reviews" ? "Отзыв" : "Фотография"} ${gallery.index + 1} из ${gallery.images.length}`
            : ""}
        </span>
        <a
          className="text-link"
          id="image-original"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Открыть изображение в полном размере"
          href={image?.src}
        >
          Полный размер
        </a>
        <button
          className="round-button"
          id="image-close"
          type="button"
          aria-label="Закрыть изображение"
          ref={closeRef}
          onClick={() => dialogRef.current.close()}
        >
          {" × "}
        </button>
      </div>
      <div className="lightbox-body">
        <button
          className="round-button"
          id="image-prev"
          type="button"
          aria-label="Предыдущее изображение"
          onClick={() => onMove(-1)}
        >
          <svg aria-hidden="true" className="icon reverse">
            <use href="#arrow" />
          </svg>
        </button>
        <img id="dialog-image" src={image?.src} alt={image?.alt || ""} />
        <button
          className="round-button"
          id="image-next"
          type="button"
          aria-label="Следующее изображение"
          onClick={() => onMove(1)}
        >
          <svg aria-hidden="true" className="icon">
            <use href="#arrow" />
          </svg>
        </button>
      </div>
    </dialog>
  );
}
