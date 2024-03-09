import React, { useState, useEffect } from "react";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import { restaurants } from "../RestaurantCardData/RestaurantData";
import Modal from "../Modal/Modal";
import "./RestroCard.scss";

const RestroCard = () => {
  const [selectedModalId, setSelectedModalId] = useState(null);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const RestaurantData = async () => {
    try {
      const response = await restaurants();
      const list =
        response?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setListOfRestaurants(list);
      console.log(list);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  useEffect(() => {
    RestaurantData();
  }, []);

  const handleCardClick = (id) => {
    setSelectedModalId(id);
  };

  const handleCloseModal = () => {
    setSelectedModalId(null);
  };

  return (
    <>
      <div className="res-card-main">
        {listOfRestaurants.map((res) => (
          <div
            className="res-card-div"
            key={res.info.id}
            onClick={() => handleCardClick(res.id)}
          >
            <div className="res-card">
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  res.info.cloudinaryImageId
                }
                alt="RestaurantImg"
                className="res-img"
              />
              <div className="top-div">
                <div>
                  <h3 className="res-name">{res.info.name.slice(0, 25)}</h3>
                </div>
                <div className="rating-div">
                  <p>
                    {res.info.avgRating}{" "}
                    <StarBorderPurple500Icon className="res-star" />
                  </p>
                </div>
              </div>
              <div className="center-div">
                <div>
                  <h3 className="cousine-name">
                    {res.info.cuisines.join(", ").slice(0, 30)}...
                  </h3>
                </div>
                <div className="price-div">
                  <p>{res.info.costForTwo}</p>
                </div>
              </div>
              <div className="place-div">
                <p>{res.info.areaName}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedModalId && (
        <div className="Modal-showDiv">
          <Modal
            setModalOpen={handleCloseModal}
            modalOpen={selectedModalId !== null}
            id={selectedModalId}
          />
        </div>
      )}
    </>
  );
};

export default RestroCard;
