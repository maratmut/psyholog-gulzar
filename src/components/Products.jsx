import ClubProduct from "./ClubProduct.jsx";
import WeightProduct from "./WeightProduct.jsx";
import BundleProduct from "./BundleProduct.jsx";
export default function Products() {
  return (
    <section
      className="products-section wrap"
      id="products"
      aria-labelledby="products-title"
    >
      {" "}
      <div className="section-heading">
        {" "}
        <p className="eyebrow">{"ТВОЙ ПУТЬ К СЕБЕ"}</p>{" "}
        <h2 id="products-title">
          {" Эти программы"}
          <br />
          {"я создала "}
          <em>{"для тебя"}</em>{" "}
        </h2>{" "}
        <p>
          {" Разные форматы. Одна важная цель —"}
          <br />
          {"научиться слышать и выбирать себя. "}
        </p>{" "}
      </div>{" "}
      <div className="product-grid">
        {" "}
        <ClubProduct /> <WeightProduct /> <BundleProduct />{" "}
      </div>{" "}
    </section>
  );
}
