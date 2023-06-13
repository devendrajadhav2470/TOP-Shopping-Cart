import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = ({ cartcnt }) => {
  // const [cnt, setcnt] = useState(0);
  // setcnt(cartcnt);
  return (
    <div className="Navbar">
      <div className="logo">SHOPPING APP</div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </div>
      <div className="cartlogo">
        <Link to="/cart">Cart</Link>({cartcnt})
      </div>
    </div>
  );
};
export default Navbar;
// for now skip the images alright, we'll think about them later
// okay  so now the navbar is done
//what is next ?
//okay let us put some things
// alright i can figure that out later, for now just move forward
// so what do we do yep, let's do that populate the shop
