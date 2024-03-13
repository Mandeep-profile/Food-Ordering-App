import React, { useState, useEffect } from "react";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import { data } from "../RestaurantCardData/RestaurantData";
import {useNavigate} from 'react-router-dom'

import AddLocationAltTwoToneIcon from '@mui/icons-material/AddLocationAltTwoTone';
import "./RestroCard.scss";

const RestroCard = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const navigate = useNavigate()

  const fetchRestarauntMenu = (restaurantId) => {
    navigate(`/restaurants/${restaurantId}`)
  }

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    setListOfRestaurants(data)
  }


  return (
    <>
      <div className="res-card-main">
        {listOfRestaurants.map((res) => (
          <div
            className="res-card-div"
            key={res.id}
            onClick={() => fetchRestarauntMenu(res.id)}
          >
            <div className="res-card">
              <img
                src={res.RestaurantImg}
                alt="RestaurantImg"
                className="res-img"
              />
              <div className="top-div">
                <div>
                  <h3 className="res-name">{res.RestaurantName.slice(0, 25)}</h3>
                </div>
                <div className="rating-div">
                  <p>
                    {res.RestaurantRating}{" "}
                    <StarBorderPurple500Icon className="res-star" />
                  </p>
                </div>
              </div>
              <div className="center-div">
                <div>
                  <h3 className="cousine-name">
                    {res.RestaurantCousines.slice(0, 30)}...
                  </h3>
                </div>
                <div className="price-div">
                  <p>{res.RestaurantPrice}</p>
                </div>
              </div>
              <div className="place-div">
                <p><AddLocationAltTwoToneIcon />{res.RestaurantPlace}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RestroCard;
