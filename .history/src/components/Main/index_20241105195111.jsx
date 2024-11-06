import imagem1 from "../../assets/images/image1.png";
import imagem4 from "../../assets/images/image4.png";
import { food_list } from "../../assets/assets";
import { CardItem } from "../CardItem";

import "./styles.css";

export function Main() {
  return (
    <main>
      <section className="grid">
        <div className="content">
          <div className="content-left">
            <div className="info">
              <h2>
                Order Your Best
                <br />
                Food anytime
              </h2>
              <p>
                Hey, our delicious food is waiting for you, <br /> We are always
                waiting for you with fresh items of food.
              </p>
            </div>
            <button>Explore Food</button>
          </div>
          <div className="content-right">
            <img src={imagem1} alt="" />
            <img src={imagem5} alt="" />
            <img src={imagem4} alt="" />
          </div>
        </div>
      </section>
      <section className="category">
        <div className="list-items">
          <h3>Popular Dishes</h3>
          {food_list.map((item, index) => {
            return (
              <CardItem
                image={item.image}
                name={item.name}
                price={item.price}
                description={item.description}
                category={item.category}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
