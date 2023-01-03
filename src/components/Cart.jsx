import React from "react";
import styles from "./AddtoCart.module.css";
import AddtoCart from "./AddtoCart";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../redux/action";
import { useEffect } from "react";
import pic from "./Screenshot 2022-05-05 231416.png";
import { Link, useNavigate } from "react-router-dom";


const Cart = () => {
  let Nagigate =useNavigate();
  const { cartProducts, totalPrice } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    getCartData(dispatch);
  }, [dispatch]);

  return (
    <>
    {cartProducts.length == 0 ? (
      <div style={{textAlign:"center",marginBottom:"20px"}} >
       
      <p>Please Add some Products To Show Here</p>
      <img  src="https://sethisbakery.com/assets/website/images/empty-cart.png" alt="" />    
      </div>
    ):(<>
<img className={styles.headerpic} src={pic} alt="" />
      <div className={styles.blue}>
        <p style={{ color: "white" }}>
          Free product to be added in the cart by the customer to avail offer
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <div className={styles.cartContainer}>
          {cartProducts.map((e) => (
            <AddtoCart key={e.id} {...e} />
          ))}
        </div>
        <div
          style={{
            border: "0.01px solid lightGrey",
            marginLeft: "30px",
            fontWeight: "lighter",
            marginTop: "30px",
          }}
        ></div>
        <div style={{ textAlign: "left", marginLeft: "15px" }}>
          <p>Apply Coupons</p>
          <div>
            <input
              className={styles.inputcoupon}
              type="text"
              placeholder="Enter Coupon Code"
            />
            <button className={styles.apply}>APPLY</button>
          </div>
          <p style={{ marginTop: "39px" }}>SHIPPING METHOD</p>
          <select name="" className={styles.selectTag}>
            <option value="default">Standard (Estimated Delivery)</option>
            <option value=""> Standard (Estimated Delivery) 5 to 6 pm</option>
          </select>
          <p style={{ marginTop: "39px" }}>ORDER DETAILS</p>
          <p style={{ fontSize: "smaller", color: "grey" }}>
            (Prices are inclusive of all taxes)
          </p>
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
            <p style={{fontWeight: "bold",fontSize:"20px"}}>ORDER TOTAL</p>
            <p style={{ marginLeft: "135px",fontWeight: "bold",fontSize:"20px" }}>${totalPrice}</p>
          </div>
          <Link to="/Products/cart/checkout">
          <button onClick={()=>Nagigate("/Products/cart/checkout")} className={styles.checkOut}>CONTINUE CHECKOUT</button>
          </Link>
        </div>
      </div>
      </>
    )
  
    }
      
    </>
  );
};

export default Cart;
