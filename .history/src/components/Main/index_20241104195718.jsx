import imagem1 from '../../assets/images/image1.png';

export function Main() {
  return (
    <main>
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
          <div className="content-right">
            <img src={imagem1} alt='' />
          </div>
        </div>
      </div>
    </main>
  );
}
