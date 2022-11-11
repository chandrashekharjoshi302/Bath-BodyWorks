import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./AddtoCart.module.css";
import { deleteProd } from "../redux/action";
import { editData } from "../redux/action";

const AddtoCart = ({ img, name, subname, type, Price, id, quantity }) => {
  const [cost, setCost] = useState(quantity * Price);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    let TotalPrice = e.target.value * Price;
    setCost(TotalPrice);
    editData(dispatch, e.target.value, id);
  };

  const handleremove = (e) => {
    deleteProd(dispatch, id);
  };

  
  return (
    <div style={{ display: "flex" }}>
      <div>
        <img className={styles.prodImg} src={img} alt="" />
      </div>
      <div style={{ textAlign: "start", width: "200px" }}>
        <p>
          {name} ({type})
        </p>
        <p style={{ color: "green" }}>In Stock</p>
        <div className={styles.qtydiv}>
          <p style={{ marginTop: "3px", marginLeft: "5px" }}>QTY:</p>
          <select
            name=""
            defaultValue={quantity}
            className={styles.qty}
            onChange={handleInput}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="8">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <button onClick={handleremove} className={styles.remove}>
          Remove
        </button>
      </div>
      <div style={{ marginLeft: "300px" }}>
        <p>EACH ITEM</p>
        <p style={{ fontSize: "smaller" }}>${Price}</p>
      </div>
      <div style={{ marginLeft: "50px" }}>
        <p>TOTAL</p>
        <p>${cost}</p>
      </div>
    </div>
  );
};

export default AddtoCart;
