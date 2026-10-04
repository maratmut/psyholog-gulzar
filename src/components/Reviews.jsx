export default function Reviews() {
  return (
    <section
      className="reviews-section wrap"
      id="rec766994231"
      aria-labelledby="reviews-title"
    >
      {" "}
      <div className="reviews-heading">
        {" "}
        <div>
          {" "}
          <p className="eyebrow">{"ВАШИ ИСТОРИИ"}</p>{" "}
          <h2 id="reviews-title">
            {" Изменения, о которых"}
            <br />
            <em>{"вы рассказываете"}</em>{" "}
          </h2>{" "}
        </div>{" "}
        <div className="gallery-controls">
          {" "}
          <button
            type="button"
            className="round-button"
            data-scroll="prev"
            aria-label="Предыдущие отзывы"
            aria-controls="reviews-rail"
          >
            {" "}
            <svg aria-hidden="true" className="icon reverse">
              {" "}
              <use href="#arrow"></use>{" "}
            </svg>
          </button>
          <button
            type="button"
            className="round-button"
            data-scroll="next"
            aria-label="Следующие отзывы"
            aria-controls="reviews-rail"
          >
            {" "}
            <svg aria-hidden="true" className="icon">
              <use href="#arrow"></use>
            </svg>{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
      <div
        className="reviews-rail"
        id="reviews-rail"
        tabIndex="0"
        aria-label="Отзывы клиентов. Прокрутите для просмотра всех отзывов"
      >
        {" "}
        <button
          className="review-card"
          type="button"
          data-gallery="reviews"
          data-image="assets/source-17.webp"
          aria-label="Прочитать отзыв 1"
        >
          {" "}
          <span className="review-quote" aria-hidden="true">
            {"“"}
          </span>
          <span className="review-image">
            <img
              src="assets/source-17.webp"
              alt="Оригинальный отзыв клиента 1"
              width="650"
              height="650"
              loading="lazy"
            />
          </span>
          <span className="review-card-footer">
            {"Отзыв клиента "}
            <span className="text-link">
              {"Читать "}
              <svg aria-hidden="true" className="icon">
                {" "}
                <use href="#arrow"></use>
              </svg>
            </span>
          </span>
        </button>
        <button
          className="review-card"
          type="button"
          data-gallery="reviews"
          data-image="assets/source-18.webp"
          aria-label="Прочитать отзыв 2"
        >
          {" "}
          <span className="review-quote" aria-hidden="true">
            {"“"}
          </span>
          <span className="review-image">
            <img
              src="assets/source-18.webp"
              alt="Оригинальный отзыв клиента 2"
              width="650"
              height="650"
              loading="lazy"
            />
          </span>
          <span className="review-card-footer">
            {"Отзыв клиента "}
            <span className="text-link">
              {"Читать "}
              <svg aria-hidden="true" className="icon">
                {" "}
                <use href="#arrow"></use>
              </svg>
            </span>
          </span>
        </button>
        <button
          className="review-card"
          type="button"
          data-gallery="reviews"
          data-image="assets/source-19.webp"
          aria-label="Прочитать отзыв 3"
        >
          {" "}
          <span className="review-quote" aria-hidden="true">
            {"“"}
          </span>
          <span className="review-image">
            <img
              src="assets/source-19.webp"
              alt="Оригинальный отзыв клиента 3"
              width="650"
              height="650"
              loading="lazy"
            />
          </span>
          <span className="review-card-footer">
            {"Отзыв клиента "}
            <span className="text-link">
              {"Читать "}
              <svg aria-hidden="true" className="icon">
                {" "}
                <use href="#arrow"></use>
              </svg>
            </span>
          </span>
        </button>
        <button
          className="review-card"
          type="button"
          data-gallery="reviews"
          data-image="assets/source-20.webp"
          aria-label="Прочитать отзыв 4"
        >
          {" "}
          <span className="review-quote" aria-hidden="true">
            {"“"}
          </span>
          <span className="review-image">
            <img
              src="assets/source-20.webp"
              alt="Оригинальный отзыв клиента 4"
              width="650"
              height="650"
              loading="lazy"
            />
          </span>
          <span className="review-card-footer">
            {"Отзыв клиента "}
            <span className="text-link">
              {"Читать "}
              <svg aria-hidden="true" className="icon">
                {" "}
                <use href="#arrow"></use>
              </svg>
            </span>
          </span>
        </button>
        <button
          className="review-card"
          type="button"
          data-gallery="reviews"
          data-image="assets/source-21.webp"
          aria-label="Прочитать отзыв 5"
        >
          {" "}
          <span className="review-quote" aria-hidden="true">
            {"“"}
          </span>
          <span className="review-image">
            <img
              src="assets/source-21.webp"
              alt="Оригинальный отзыв клиента 5"
              width="650"
              height="650"
              loading="lazy"
            />
          </span>
          <span className="review-card-footer">
            {"Отзыв клиента "}
            <span className="text-link">
              {"Читать "}
              <svg aria-hidden="true" className="icon">
                {" "}
                <use href="#arrow"></use>
              </svg>
            </span>
          </span>
        </button>
        <button
          className="review-card"
          type="button"
          data-gallery="reviews"
          data-image="assets/source-22.webp"
          aria-label="Прочитать отзыв 6"
        >
          {" "}
          <span className="review-quote" aria-hidden="true">
            {"“"}
          </span>
          <span className="review-image">
            <img
              src="assets/source-22.webp"
              alt="Оригинальный отзыв клиента 6"
              width="650"
              height="650"
              loading="lazy"
            />
          </span>
          <span className="review-card-footer">
            {"Отзыв клиента "}
            <span className="text-link">
              {"Читать "}
              <svg aria-hidden="true" className="icon">
                {" "}
                <use href="#arrow"></use>
              </svg>
            </span>
          </span>{" "}
        </button>{" "}
      </div>{" "}
      <div className="reviews-bottom">
        {" "}
        <p>{"Нажми на отзыв, чтобы прочитать его полностью."}</p>{" "}
        <a
          className="button button-outline"
          href="https://psyholog-gulzar.com/otzivi"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"Читать больше отзывов "}
          <svg aria-hidden="true" className="icon">
            <use href="#arrow"></use>
          </svg>
        </a>{" "}
      </div>{" "}
    </section>
  );
}
