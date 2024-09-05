import React from "react";
import jsonData from "../restApi.json";

const Menu = () => {
  // Access the data from the first element in the array
  const dishes = jsonData.data[0].dishes;

  if (!dishes) {
    return <div>Error loading navigation links</div>;
  }

  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">POPULAR DISHES</h1>
          <p>
            Discover our most-loved dishes that have won the hearts of our
            customers. These favorites are crafted with care and packed with
            flavor, making them the go-to choices for anyone seeking a delicious
            meal. From classic comfort foods to exciting new flavors, our
            popular dishes are sure to satisfy every craving and leave you
            wanting more.
          </p>
        </div>
        <div className="dishes_container">
          {dishes.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                <button>{element.category}</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
