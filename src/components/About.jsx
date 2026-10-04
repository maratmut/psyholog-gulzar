export default function About() {
  return (
    <section
      id="about"
      className="about-section wrap"
      aria-labelledby="about-title"
    >
      {" "}
      <div className="about-surface">
        {" "}
        <div className="about-visual">
          {" "}
          <img
            src="assets/source-02.webp"
            alt="Гюльзар в белой рубашке"
            width="1200"
            height="1800"
            loading="lazy"
          />
          <span className="photo-label">
            {"Гюльзар "}
            <span>{"Психолог-сексолог"}</span>
          </span>{" "}
        </div>{" "}
        <div className="about-copy">
          {" "}
          <p className="eyebrow">{"ДАВАЙ ЗНАКОМИТЬСЯ"}</p>{" "}
          <h2 id="about-title">
            {" Меня зовут"}
            <br />
            <em>{"Гюльзар."}</em>
            <br />
            {"Я — психолог. "}
          </h2>{" "}
          <p>
            {
              " Меня зовут Гюльзар, я дипломированный психолог-сексолог, гештальт-терапевт, и со мной начнутся динамичные и яркие изменения в твоей жизни. "
            }
          </p>{" "}
          <p>
            {
              " Я хочу, чтобы каждая женщина получала удовольствие от того, что она женщина и понимала, что быть счастливой женщиной ее призвание. "
            }
          </p>{" "}
          <details className="program-subdetails">
            {" "}
            <summary>
              {" Подробнее о моём подходе"}
              <span className="disclosure-mark" aria-hidden="true"></span>{" "}
            </summary>{" "}
            <div className="program-content">
              {" "}
              <p>
                {
                  " Я из тех психологов, которые идут в глубину. Работаю с клиентом так, чтобы он менял свою жизнь и получал желаемое: здоровую самооценку и проявленность, полное принятие себя и своего тела, ощущение спокойствия и счастья, крепкие и счастливые взаимоотношения — где тебя любят, ценят и заботятся; рост в доходе, жизнь без тревоги и невроза. "
                }
              </p>{" "}
            </div>{" "}
          </details>{" "}
          <div className="about-credentials">
            {" "}
            <svg aria-hidden="true">
              <use href="#star"></use>
            </svg>{" "}
            <p>
              {"Дипломированный психолог-сексолог"}
              <br />
              {"Гештальт-терапевт"}
            </p>{" "}
          </div>{" "}
          <a className="text-link" href="#rec766772960">
            {"Познакомиться на консультации "}
            <svg aria-hidden="true" className="icon">
              <use href="#arrow"></use>
            </svg>
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
