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
  const { resId } = useParams();

  useEffect(() => {
    const restaurant = data.find((item) => item.id === parseInt(resId));
    if (restaurant) {
      setRestaurantName(restaurant.RestaurantName);
      setMenuItems(restaurant.Menu || []);
    } else {
      console.log("Not getting Menu");
    }
  }, [resId]);

  const handleAddItems = () => {
    setNumberOfItems(NumberOfItems + 1);
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
              {NumberOfItems === 0 ? (
                <button className="btn" onClick={handleAddItems}>
                  Add
                </button>
              ) : (
                <div className="btn">
                  <RemoveIcon
                    className="minus-btn"
                    onClick={() => setNumberOfItems(NumberOfItems - 1)}
                  />
                  <div className="ItemsNumber">{NumberOfItems}</div>
                  <AddIcon
                    className="add-btn"
                    onClick={() => setNumberOfItems(NumberOfItems + 1)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuComponent;
