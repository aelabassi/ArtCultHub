import React from "react";

import "./modal.css";

const Modal = ({ setShowModal }) => {
  return (
    <div className="modal__wrapper">
      <div className="single__modal">
        <span className="close__modal">
          <i class="ri-close-line" onClick={() => setShowModal(false)}></i>
        </span>
        <h6 className="text-center text-light">Place a Bid</h6>
        <p className="text-center text-light">
          You must bid at least <span className="money">58.9 MAD</span>
        </p>

        <div className="input__item mb-4">
          <input type="number" placeholder="00 : 00 MAD" />
        </div>

        <div className="input__item mb-3">
          <h6>Enter Quantity, 12 available</h6>
          <input type="number" placeholder="Enter quantity" />
        </div>

        <div className=" d-flex align-items-center justify-content-between">
          <p>You must bid at least</p>
          <span className="money">100 MAD</span>
        </div>

        <div className=" d-flex align-items-center justify-content-between">
          <p>Service Fee</p>
          <span className="money">2.99 MAD</span>
        </div>

        <div className=" d-flex align-items-center justify-content-between">
          <p>Total Bid Amount</p>
          <span className="money">102.99 MAD</span>
        </div>

        <button className="place__bid-btn">Place a Bid</button>
      </div>
    </div>
  );
};

export default Modal;
