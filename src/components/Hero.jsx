export default function Hero() {
  return (
    <section id="home" className="hero wrap" aria-labelledby="hero-title">
      {" "}
      <div className="hero-surface">
        {" "}
        <div className="hero-portrait">
          {" "}
          <div className="portrait-orbit" aria-hidden="true"></div>{" "}
          <img
            className="hero-photo"
            src="assets/hero-cutout.webp"
            alt="Гюльзар, психолог-сексолог"
            width="1096"
            height="1436"
            fetchPriority="high"
          />{" "}
          <div className="portrait-caption">
            {" "}
            <span>{"Гюльзар"}</span>
            <small>{"Психолог · Гештальт-терапевт"}</small>{" "}
          </div>{" "}
          <span className="portrait-seal" aria-hidden="true">
            <svg aria-hidden="true">
              <use href="#star"></use>
            </svg>
            <span>
              {"С заботой"}
              <br />
              {"о тебе"}
            </span>
          </span>{" "}
        </div>{" "}
        <div className="hero-copy">
          {" "}
          <p className="eyebrow">
            {" "}
            <span className="gold-line"></span>
            {" ЗДРАВСТВУЙ, УНИКАЛЬНАЯ "}
          </p>{" "}
          <h1 id="hero-title">
            {"Быть"}
            <br />
            <em>{"счастливой"}</em>
            <br />
            {"женщиной"}
          </h1>{" "}
          <p className="hero-description">
            {
              " Я хочу, чтобы каждая женщина получала удовольствие от того, что она женщина. "
            }
          </p>{" "}
          <a className="button button-gold" href="#rec766780585">
            {"Начать свой путь "}
            <svg aria-hidden="true" className="icon">
              <use href="#arrow"></use>
            </svg>
          </a>{" "}
          <p className="hero-note">
            {" "}
            <span className="tiny-star" aria-hidden="true">
              {"✧"}
            </span>
            {" Принятие. Доверие. Конфиденциальность. "}
          </p>{" "}
        </div>{" "}
        <a
          className="hero-scroll"
          href="#rec766780585"
          aria-label="Перейти к программам"
        >
          <span>{"ЗНАКОМСТВО С СОБОЙ"}</span>
          <svg aria-hidden="true" className="icon">
            <use href="#arrow"></use>
          </svg>
        </a>{" "}
      </div>{" "}
    </section>
  );
}
