import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg"
            alt=""
          />

          <div className="home__row">
            <Product
              id="2453"
              title="The Adventures of Huckleberry Finn (Wisehouse Classics Edition)"
              price={1.99}
              rating={4}
              image="https://m.media-amazon.com/images/I/517KCrKL6BL._SY300_.jpg"
            />
            <Product
              id="2433"
              title="The Second Chance Café (A Hope Springs Novel)"
              price={4.99}
              rating={5}
              image="https://m.media-amazon.com/images/I/51KNEndUcZL._PJku-sticker-v7,TopRight,0,-50._SY300_.jpg"
            />
          </div>

          <div className="home__row">
            <Product
              id="2033"
              title="Wonder"
              price={9.99}
              rating={5}
              image="https://m.media-amazon.com/images/I/41k1HQF0PnL._SY300_.jpg"
            />
            <Product
              id="1033"
              title="The Elven (The Saga of the Elven Book 1)"
              price={3.99}
              rating={4}
              image="https://m.media-amazon.com/images/I/51vrtxG5syL._PJku-sticker-v7,TopRight,0,-50._SY300_.jpg"
            />
            <Product
              id="1043"
              title="Forgotten in Death: An Eve Dallas Novel"
              price={14.99}
              rating={3}
              image="https://m.media-amazon.com/images/I/515XNU6M5HS._SY300_.jpg"
            />
          </div>

          <div className="home__row">
            <Product
              id="1046"
              title="Long Road to Mercy (Atlee Pine Book 1)"
              price={9.99}
              rating={3}
              image="https://m.media-amazon.com/images/I/51uQ4obrOyL._SY300_.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
