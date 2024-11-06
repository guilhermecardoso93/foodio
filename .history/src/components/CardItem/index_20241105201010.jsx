import "./styles.css";

export function CardItem({ image, name, price, description, category }) {
  function formatarPreco(valor) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "USD",
    }).format(valor);
  }

  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="food-title">
        <h1>{name}</h1>
      </div>
      <div className="desc-food">
        <p>{description}</p>
        <p>{category}</p>
      </div>
      <div className="price">
        <span>{formatarPreco(price)}</span>
      </div>
    </div>
  );
}
