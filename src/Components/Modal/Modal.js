import React from "react";
import { data } from "../../Components/RestaurantCardData/RestaurantData";
import "./Modal.scss";

const Modal = ({ modalOpen, setModalOpen, id }) => {
  const selectedRestaurant = data.find((resData) => resData.id === id);

  return (
    <>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close" onClick={() => setModalOpen(false)}>
              Close
            </button>
          </div>
            <h1 className="restro-heading">
              {selectedRestaurant ? selectedRestaurant.RestaurantName : ""}
            </h1>
        </div>
      )}
    </>
  );
};

export default Modal;
