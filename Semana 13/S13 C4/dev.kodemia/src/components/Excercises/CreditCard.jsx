import React, { useState } from "react";
import "../../styles/CreditCard.css";

export default function CreditCard() {
  const [cardNumber, setCardNumber] = useState("#### #### #### ####");
  const [cardName, setCardName] = useState("YOUR NAME HERE");
  const [cardDate, setCardDate] = useState("##/##");
  const [cardCvc, setCardCvc] = useState();

  const handleCardNumber = (event) => {
    let newValue = event.target.value.replace(/(\d{4})(\B)/g, "$1 ");
    setCardNumber(newValue);
  };

  const handleCardName = (event) => {
    setCardName(event.target.value.toUpperCase());
  };

  const handleCardDate = (event) => {
    let newDate = event.target.value.split("-").reverse();
    let month = newDate[0];
    let year = newDate[1].substring(2, 4);
    let date = month + "/" + year;
    setCardDate(date);
  };

  const handleCardCvc = (event) => {
    setCardCvc(event.target.value);
  };

  const startAnimation = (event) =>{
      console.log(event.target)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 offset-2 card-body">
          <label htmlFor=""></label>
          <input
            type="textarea"
            className="h-25 card-number"
            placeholder={cardNumber}
            value={cardNumber}
            readOnly
          />
          <div className='d-flex '>
          <input
            type="textarea"
            className="card-name"
            placeholder={cardName}
            value={cardName}
            readOnly
          />
          <div className="d-flex flex-column date-container">
            <span className='valid-thru'>VALID THRU</span>
            <input
              type="textarea"
              className=" card-date"
              placeholder={cardDate}
              value={cardDate}
              readOnly
            />
          </div>
          </div>
          <input
            type="textarea"
            className='card-cvc'
            placeholder={cardCvc}
            value={cardCvc}
            readOnly
          />
        </div>
        <div className="col-4 offset-1 d-flex flex-column">
          <label htmlFor=""></label>
          <input
            type="text"
            pattern={/[0-9]{4}\s/g}
            name="cardNumber"
            className="form-control"
            onChange={handleCardNumber}
            maxLength={16}
          />
          <input
            type="text"
            name="cardName"
            className="form-control"
            onChange={handleCardName}
          />
          <div className="d-flex justify-content-between">
            <input
              type="month"
              name="cardDate"
              className="form-control w-75"
              onChange={handleCardDate}
            />
            <input
              type="text"
              name="cardCvc"
              className="form-control w-25"
              onChange={handleCardCvc}
              maxLength={3}
              onFocus={startAnimation}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
