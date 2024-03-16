import React, { useState, useEffect } from "react";
import { data } from "../RestaurantCardData/RestaurantData";
import Veg from "../../Assets/vegetarian.png";
import NonVeg from "../../Assets/non-vegetarian.png";
import { useParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./Menu.scss";

const MenuComponent = ({ NumberOfItems, setNumberOfItems, addItemsInCart }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [restaurantName, setRestaurantName] = useState([]);
  const [showCartItemNumber, setShowCartItemNumber] = useState(false);

  const { resId } = useParams();

  useEffect(() => {
    const Restaurants = data.find(
      (restaurant) => restaurant.id === parseInt(resId)
    );
    if (Restaurants) {
      setRestaurantName(Restaurants.RestaurantName);
      setMenuItems(Restaurants.Menu);
      const productQuantity = Restaurants.Menu.map((menuItem) => ({
        ...menuItem,
        quantity: NumberOfItems,
      }));
      setMenuItems(productQuantity);
    } else {
      console.log("Restaraunt Not Found");
    }
  }, [resId]);

  useEffect(() => {
    const totalItems = menuItems.reduce((acc, item) => acc + item.quantity, 0)
    setNumberOfItems(totalItems)
    setShowCartItemNumber(true)
    console.log(totalItems);
  }, [menuItems])

  const addMenuItems = (item) => {
    addItemsInCart(item)
    setMenuItems((prevItems) =>
      prevItems.map((menuItem) =>
      menuItem.Mid === item.Mid && item.quantity + 1
          ? { ...menuItem, quantity: item.quantity + 1 }
          : menuItem
      )
    );
  };

  const subMenuItems = (id) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        id === item.Mid && item.quantity >= 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="menu-card">
      <h4 className="res-heading">{restaurantName}</h4>
      {menuItems?.map((item) => (
        <div key={item.Mid} className="menu-card-info">
          <div className="menu-card-img">
            <img src={item.ItemImg} alt={item.ItemName} />
          </div>
          <div className="menu-card-name">
            <div className="type-icons">
              <h3>{item.ItemName}</h3>
              {item.type === "veg" ? (
                <div>
                  <img src={Veg} alt="Veg-icon" />
                </div>
              ) : (
                <div>
                  <img src={NonVeg} alt="Veg-icon" />
                </div>
              )}
            </div>
            <p>{item.description}</p>
            <div className="menu-card-price">
              <p>Price : {item.Price}</p>
              {item.quantity === 0 ? (
                <button className="btn" onClick={() => addMenuItems(item)}>
                  Add
                </button>
              ) : (
                <div className="btn">
                  <RemoveIcon
                    className="minus-btn"
                    onClick={() => subMenuItems(item.Mid)}
                  />
                  <div className="ItemsNumber">{item.quantity}</div>
                  <AddIcon
                    className="add-btn"
                    onClick={() => addMenuItems(item)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      {NumberOfItems === 0 ? !showCartItemNumber : <p className="cart-items">{NumberOfItems}</p>}
    </div>
  );
};

export default MenuComponent;
