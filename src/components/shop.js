// don't overthink,let's do it the simple way, nothing to worry about alright
import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import "./product.css";
import "./shop.css";
import { Link } from "react-router-dom";
import data from "../data";
// import { isButtonElement } from "react-router-dom/dist/dom";
const Shop = () => {
  let cards = CreateCards();
  return (
    <div>
      <div className="productgallery">{cards}</div>
    </div>
  );
};
export default Shop;
// let us just do that, let us make an array of Cards
// alright how do i do that, let us first create that,
const Product = ({ image, caption, price, id }) => {
  return (
    <div className="Product">
      <Link to={`/shop/${id}`}>
        <img className="image" src={image} />
        <div className="caption">{caption}</div>
        <div className="price">${price}</div>
      </Link>
    </div>
  );
};
// a bunch of product , what is that called ? productgallery
const CreateCards = () => {
  // a div that contains a bunch of Products
  // for now let us just skip the images part,
  // okay what's now alright, let us do that
  const list = [];
  for (let ele of data) {
    list.push(
      <Product
        image={ele.image}
        caption={ele.brand}
        price={ele.price}
        id={ele.id}
      />
    );
  }

  return list;
};

// so this is done
// what id next ? next is
// i should be click on the image, yep that's what should happen
// yep that's what's next, i should click on the image and i should be able to add it to cart
//  how do i do this ?
//
