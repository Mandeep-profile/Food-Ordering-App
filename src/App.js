import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import RestroCard from "./Components/Restaurants/RestroCard";
import About from "./Components/About/About";
import Menu from "./Components/Menu/Menu";
import Cart from "./Components/Cart/Cart";

const App = () => {
  const [NumberOfItems, setNumberOfItems] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addItemsInCart = (menuItem) => {
    const existingItemValue = cartItems.findIndex(
      (item) => item.Mid === menuItem.Mid
    );
    if (existingItemValue !== -1) {
      const updatetedItem = cartItems.map((item) =>
        item.Mid === menuItem.Mid
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatetedItem)
    } else {
      setCartItems((item) => [...item, {...menuItem, quantity : 1}]);
    }
  };

  return (
    <Router>
      <div>
        <Navbar />
        <div
          style={{
            width: "80%",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            margin: "0 auto",
            gap: "50px",
          }}
        ></div>
        <Routes>
          <Route path="/" element={<RestroCard />} />
          <Route path="/home" element={<RestroCard />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/restaurants/:resId"
            element={
              <Menu
                NumberOfItems={NumberOfItems}
                setNumberOfItems={setNumberOfItems}
                addItemsInCart={addItemsInCart}
              />
            }
          />
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
