import React, { useState } from "react";
import { data } from "../../Components/RestaurantCardData/RestaurantData";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import "./Modal.scss";

const Modal = ({ modalOpen, setModalOpen, id }) => {
  const selectedRestaurant = data.find((resData) => resData.id === id);
  const [count, setCount] = useState(0);

  const handleitemsAdd = () => {
    setCount(count + 1);
  };

  const handleitemsSub = () => {
    if (count !== 0) {
      setCount(count - 1);
    } else {
      setCount(count);
    }
  };

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
          <div className="items">
            {selectedRestaurant.Menu.map((item, Menu_id) => {
              return (
                <div className="item-div" key={Menu_id}>
                  <div>
                    <img src={item.ItemImg} alt="Menu-item" />
                  </div>
                  <div className="items-des">
                    <h4>{item.ItemName}</h4>
                    <div className="price">
                      <p>{item.Price}</p>
                      <button>
                        <span onClick={handleitemsSub}>
                          {count > 0 ? <RemoveIcon /> : ""}
                        </span>
                        {count === 0 ? "" : count}
                        <span onClick={handleitemsAdd}>
                          {count > 0 ? <AddIcon /> : "Add"}
                        </span>
                      </button>
                    </div>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
