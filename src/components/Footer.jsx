export default function Footer() {
  return (
    <footer className="site-footer" id="contacts">
      {" "}
      <div className="wrap">
        {" "}
        <div className="footer-top">
          {" "}
          <a className="brand" href="#home">
            <span>
              {"Гюльзар"}
              <span className="brand-dot">{"."}</span>
            </span>
            <small>{"ПСИХОЛОГ-СЕКСОЛОГ"}</small>
          </a>{" "}
          <div className="footer-support">
            {" "}
            <h2>{"Остались вопросы?"}</h2>{" "}
            <p>{"Не получилось оплатить? Напишите нам в отдел заботы."}</p>{" "}
          </div>{" "}
          <a
            className="button button-outline"
            href="https://wa.me/79993293316"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Написать в отдел заботы "}
            <svg aria-hidden="true" className="icon">
              <use href="#arrow"></use>
            </svg>
          </a>{" "}
        </div>{" "}
        <div className="footer-bottom">
          {" "}
          <p>
            {" ИП Магомедова Беневше Имамединовна"}
            <br />
            {"ОГРНИП 324050000097493 · ИНН 051901257340 "}
          </p>{" "}
          <div>
            {" "}
            <a
              href="https://psyholog-gulzar.com/politika"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Политика конфиденциальности"}
            </a>
            <a
              href="https://psyholog-gulzar.com/dogovor_oferty"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Договор оферты"}
            </a>{" "}
          </div>{" "}
          <a className="back-top" href="#home">
            {"Наверх "}
            <svg aria-hidden="true" className="icon">
              <use href="#arrow"></use>
            </svg>
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
}
