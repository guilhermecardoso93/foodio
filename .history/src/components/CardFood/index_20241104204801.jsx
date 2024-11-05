export function CardItem({image, name, price, description, category}) {
  return (
    <div className="card-list">
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
