import Homepage from "./components/Homepage";
import Shop from "./components/shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import Cart from "./components/Cart";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import "./App.css";
const RouteSwitch = () => {
  const [cart, setCart] = useState([]);
  const [cartcnt, setCartcnt] = useState(0);
  function addtocart(product) {
    let lis = [...cart];
    lis.push(product);
    setCart(lis);
    setCartcnt(cartcnt + 1);
  }
  function removefromcart(id) {
    let lis = [...cart].filter((x) => {
      return x.id != id;
    });
    setCart(lis);
    setCartcnt(cartcnt - 1);
  }
  return (
    <BrowserRouter>
      <Navbar cartcnt={cartcnt} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route
          path={`/shop/:id`}
          element={<Details cart={cart} addtocart={addtocart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              cartcnt={cartcnt}
              removefromcart={removefromcart}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default RouteSwitch;
