import React from "react";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import { data } from "../../Components/RestaurantCardData/RestaurantData"
import "./RestroCard.scss";

const RestroCard = () => {
  return (
    <>
      {data.map((res) => {
        return (
          <div className="res-card-div">
            <div className="res-card">
              <img
                src={res.RestaurantImg}
                alt="RestaurantImg"
                className="res-img"
              />
              <div className="top-div">
                <div>
                  <h3 className="res-name">
                    {res.RestaurantName.slice(0, 25)}
                  </h3>
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
                    {res.RestaurantCousines.slice(0, 35)}...
                  </h3>
                </div>
                <div className="price-div">
                  <p>{res.RestaurantPrice}</p>
                </div>
              </div>
              <div className="place-div">
                <p>{res.RestaurantPlace}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RestroCard;
