import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import React from 'react';
import Progress from './Progress';
import styles from './Payment2.module.css';
import { useSelector } from 'react-redux';

const Payment2 = () => {
  const { cartProducts, totalPrice } = useSelector((state) => state);
  console.log(cartProducts);
  
  const address = {
    name: 'Anupam Kumar',
    address: 'Qr.no. 809',
    city: 'Bokaro',
    pin: '827009',
    phone: 7903179655,
  };
  return (
    <div style={{backgroundColor:"rgb(249,249,249)"}}>
      <Progress />
      <div className={styles.mainUpperDiv}>
        <div className={styles.upper_submitbtnDiv}>
          <h2>YOUR ORDER</h2>
          <div>
          <Link to="/Products/cart/checkout/payment2/otp">
                <button style={{cursor:'pointer'}}>SUBMIT ORDER</button>
                </Link>
          </div>
        </div>
        <div className={styles.leftright}>
          <div className={styles.leftdiv}>
            <div className={styles.shippingdeatails}>
              <div>
                <h4>ship to</h4>
                <p>{address.name}</p>
                <p>{address.address}</p>
                <p>{address.city}</p>
                <p>{address.pin}</p>
                <p>{address.phone}</p>
              </div>
              <div>
                <h4>Shipping Method</h4>
                <p>Standard</p>
                <p>$6.99</p>
              </div>
              <div>
                <Link to="/">Edit</Link>
              </div>
            </div>
            <div className={styles.billingdetails}>
              <div>
                <h4>Bill to</h4>
                <p>{address.name}</p>
                <p>{address.address}</p>
                <p>{address.city}</p>
                <p>{address.pin}</p>
                <p>{address.phone}</p>
              </div>
              <div>
                <h4>Payment Method</h4>
                <p>CREDIT CARD</p>
                <p>Visa</p>
                <p>card last four degit</p>
                <p>price to paid</p>
              </div>
              <div>
                <Link to="/">Edit</Link>
              </div>
            </div>
            <div>
              <h2>YOUR ITEMS</h2>
              <hr />
              <div style={{width:"500px"}}>
              {cartProducts.map((item,i) => {
                return (
                  <>
                  
                  <div style={{display:"flex",justifyContent:"space-between"}}>
                    <img style={{width:"70px",height:"70px"}} src={item.img} alt="" />
                  <div  key={uuid()}> Name: ${item.name} </div>
                  <div key={uuid()} style={{marginRight:"-10px"}}>  Price: ${item.Price}</div>
                  </div>
                   
                   <br />
                  </>
                )
             
              })}
              </div>
            
              <hr />
              <div className={styles.endsubmitbtn}>
               
              </div>
            </div>
          </div>
          <div className={styles.paymentsummary}>
           
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment2;
