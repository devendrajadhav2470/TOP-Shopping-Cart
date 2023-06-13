import React from "react";
import { useMatch } from "react-router-dom";
import { useState } from "react";
import data from "../data";
import { Link } from "react-router-dom";
import "./Details.css";
export default function Details({ cart, addtocart }) {
  let match = useMatch("/shop/:id");
  const [qty, setQty] = useState(1);
  let product = 0;
  console.log(match.params.id);
  function incrementqnty() {
    setQty(qty + 1);
  }
  function decrementqnty() {
    if (qty > 1) {
      setQty(qty - 1);
    }
  }
  function buynow() {
    // i need to add this product to the cart and go to the cart
  }
  for (let ele of data) {
    if (ele.id == match.params.id) {
      product = ele;
    }
  }
  return (
    <div className="details-container">
      <div className="details">
        <img src={product.image} />
        <div>
          <div style={{ fontWeight: 600, fontSize: "30px" }}>
            {product.brand}
          </div>
          <div>{product.description}</div>
          <div>
            <button onClick={incrementqnty}>+</button>
            <input value={qty}></input>
            <button onClick={decrementqnty}>-</button>
          </div>
          <div>
            <Link to="/cart">
              <button
                onClick={(e) => {
                  addtocart(product);
                }}
              >
                Buy Now
              </button>
            </Link>
            <button
              onClick={(e) => {
                addtocart(product);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
