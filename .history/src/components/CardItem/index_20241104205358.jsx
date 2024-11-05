export function CardItem({ image, name, price, description, category, index }) {
  return (
    <div className="card-list" key={index}>
      <img src={image} alt="" />
      <div className="food-title">
        <h1>{name}</h1>
      </div>
      <div className="desc-food">
        <p>{description}</p>
        <p>{category}</p>
      </div>
      <div className="price">
        <span>${price}</span>
      </div>
    </div>
  );
}
