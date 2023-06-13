import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";
import "./Homepage.css";
const Homepage = () => {
  return (
    <>
      <div className="homepage">
        {/* so here i will have the navbar and the rest of the content  */}
        <div className="ad">
          <div className="title">The Best Coffee Brands Around The World !</div>
          <div>
            <Link to="/shop">
              <button>Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Homepage;
// what should we make ?
// don't overthink
// let us now make the shopping area
// has a lot of products
// so i need to create products
// how do i do that ?
