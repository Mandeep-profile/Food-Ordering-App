import React, { useState, useEffect } from "react";
import { data } from "../RestaurantCardData/RestaurantData";
import Veg from "../../Assets/vegetarian.png";
import NonVeg from "../../Assets/non-vegetarian.png";
import { useParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./Menu.scss";

const MenuComponent = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [restaurantName, setRestaurantName] = useState([]);
  const [NumberOfItems, setNumberOfItems] = useState(0);
  const [showCartItemNumber, setShowCartItemNumber] = useState(false)
  const { resId } = useParams();

  useEffect(() => {
    const restaurant = data.find((item) => item.id === parseInt(resId));
    if (restaurant) {
      setRestaurantName(restaurant.RestaurantName);
      setMenuItems(restaurant.Menu || []);
      const initializedMenuItems = restaurant.Menu.map((menuItem) => ({
        ...menuItem,
        quantity: NumberOfItems,
      }));
      setMenuItems(initializedMenuItems);
    } else {
      console.log("Not getting Menu");
    }
  }, [resId]);

  useEffect(() => {
    const TotalItems = menuItems.reduce((acc, item) => acc + item.quantity, 0)
    setNumberOfItems(TotalItems)
    setShowCartItemNumber(true)
  },[menuItems])

  const handleAddItems = (AdditemId) => {
    console.log(NumberOfItems)
    setMenuItems((prevMenuItems) => 
    prevMenuItems.map((item) => AdditemId === item.Menu_id && item.quantity + 1 ? {...item, quantity: item.quantity + 1} : item
    ))
  }

  const handleremoveItems = (itemId) => {
    setMenuItems((prevMenuItems) =>
      prevMenuItems.map((item) =>
        item.Menu_id === itemId && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="menu-card">
      <h4 className="res-heading">{restaurantName}</h4>
      {menuItems.map((item) => (
        <div key={item.Menu_id} className="menu-card-info">
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
                <button className="btn" onClick={() => handleAddItems(item.Menu_id)}>
                  Add
                </button>
              ) : (
                <div className="btn">
                  <RemoveIcon
                    className="minus-btn"
                    onClick={() => handleremoveItems(item.Menu_id)}
                  />
                  <div className="ItemsNumber">{item.quantity}</div>
                  <AddIcon
                    className="add-btn"
                    onClick={() => handleAddItems(item.Menu_id)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      {NumberOfItems === 0  ? !showCartItemNumber : <p className="cart-items">{NumberOfItems}</p>}
    </div>
  );
};

export default MenuComponent;
