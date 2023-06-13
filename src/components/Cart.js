import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Cart.css";
export default function Cart({ cart, cartcnt, removefromcart }) {
  let list = [];
  // list of the divs of the ind its
  for (let i = 0; i < cart.length; i++) {
    list.push(
      <Item
        image={cart[i].image}
        title={cart[i].brand}
        price={cart[i].price}
        id={cart[i].id}
        removefromcart={removefromcart}
      />
    );
  }
  return (
    <div>
      <div className="cart" key={78}>
        <div>{list}</div>
      </div>
    </div>
  );
}
function Item({ image, title, price, id, removefromcart }) {
  return (
    <div className="item">
      <img src={image} />
      <div>{title}</div>
      <div>{price}</div>
      <button
        onClick={(e) => {
          removefromcart(id);
        }}
      >
        remove item
      </button>
    </div>
  );
}
// okay lets do that, it'll be a nice little exercise;
// what is the problem, the problem si that it is not appearing, over there
// i need to something about that, yep i need to do something about that
