// import React, {useEffect,useState} from 'react'
import CountryDetail from "./CountryDetail";
import Statedetail from "./Statedetail";
import { useSelector } from "react-redux";
import styles from "../components/AddtoCart.module.css";
import pic from "./Screenshot 2022-05-08 123124.png";
// import axios from '.axios';
import "./Checkout.css";
//
import { Link } from "react-router-dom";
function Cart() {}

const Checkout = () => {
  const { cartProducts, totalPrice } = useSelector((state) => state);
  return (
    <div style={{ backgroundColor: "rgb(249,249,249)" }}>
      <img
        style={{ height: "120px", width: "380px", marginLeft: "37%" }}
        src={pic}
        alt=""
      />
      <p className="sizechange">ADDRESS</p>
      <hr style={{ width: "73%" }} />
      <div className="cointainer" style={{ display: "flex" }}>
        <div className="cointainer1" style={{ marginLeft: "200px" }}>
          <p className="changeshipping">Select Delivery Address</p>
          <div style={{ display: "flex" }}>
            <p>First Name</p>
            <p style={{ marginLeft: "40%" }}>Last Name</p>
          </div>
          <div style={{ display: "flex" }}>
            <input type="text" className="changeinput" />
            <input
              style={{ marginLeft: "05%" }}
              type="text"
              className="changeinput"
            />
          </div>
          <p>Address 1</p>
          <input
            type="text"
            style={{ width: "580px" }}
            className="changeinput"
          />
          <p>Address 2</p>
          <input
            type="text"
            style={{ width: "580px" }}
            className="changeinput"
          />
          <div style={{ display: "flex" }}>
            <p>Country</p>
            <p style={{ marginLeft: "42%" }}>Zip-code</p>
          </div>
          <div style={{ display: "flex" }}>
            <CountryDetail />
            <input
              type="Number"
              style={{ marginLeft: "17%" }}
              className="changeinput"
            />
          </div>
          <div style={{ display: "flex" }}>
            <p>State</p>
            <p style={{ marginLeft: "45%" }}>City</p>
          </div>
          <div style={{ display: "flex" }}>
            <Statedetail />
            <input
              type="Number"
              style={{ marginLeft: "17%" }}
              className="changeinput"
            />
          </div>
          <p>Phone</p>
          <input
            type="Number"
            style={{ width: "100%" }}
            className="changeinput"
          />
          <p style={{ marginTop: "50px" }}>SHIPPING METHOD</p>
          <label>
            <input type="Radio" name="Choice-radio" />
            <span> Standard</span>
            <span> (3-7 business days.)</span>
            <p style={{ marginLeft: "4%" }}>
              Estimated delivery Tues May 10 - Mon May 16
            </p>
          </label>{" "}
          <br></br>
          <label>
            <input type="Radio" name="Choice-radio" />
            <span> Expedited</span>
            <span> (2 business days)</span>
            <p style={{ marginLeft: "4%" }}>Estimated delivery Tues May 10 </p>
          </label>
          <br></br>
          <label>
            <input type="Radio" name="Choice-radio" />
            <span>Overnight </span>
            <span>(1 business day)</span>
            <p style={{ marginLeft: "4%" }}>Estimated delivery Mon May 09</p>
          </label>
        </div>

        <div style={{ marginLeft: "10%", marginTop: "29px" }}>
          <p>Order Summary</p>
          <div style={{ display: "flex" }}>
            <p>Order amount</p>
            <p style={{ marginLeft: "178px" }}>${totalPrice}</p>
          </div>
          <div style={{ display: "flex" }}>
            <p>Shipping Charges</p>
            <p style={{ marginLeft: "150px" }}>$0</p>
          </div>
          <div style={{ display: "flex" }}>
            <p>Discount</p>
            <p style={{ marginLeft: "215px" }}>$0</p>
          </div>
          <div style={{ display: "flex" }}>
            <p>Total MRP</p>
            <p style={{ marginLeft: "205px" }}>${totalPrice}</p>
          </div>
          <hr className={styles.orderLine} />
          <div style={{ display: "flex" }}>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>ORDER TOTAL</p>
            <p
              style={{
                marginLeft: "135px",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              ${totalPrice}
            </p>
          </div>
          <Link to="/Products/cart/checkout/payment">
            <button className={styles.checkOut}>CONTINUE SHIPPING ADDRESS</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
