import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../components/Products";
import Pro from "../components/Pro";
import Cart from "../components/Cart";
import Checkout from "../checkout/Checkout";
import Payment from "../components/Payment";
import Payment2 from "../components/Payment2";
import Otp from "../components/Otp";
import Thanks from "../components/Thanks";
import { Homepage } from "../pages/Homepage";
import { Profile } from "../pages/Profile";

const MainRoutes = () => {
  return (
    <div>
     
      <Routes>
          <Route path="/Products/cart" element={<Cart />} />
          <Route path="/Products/cart/checkout" element={<Checkout/>}/>
          <Route path="/Products/cart/checkout/payment" element={<Payment/>}></Route>
          <Route path="/Products/cart/checkout/payment2" element={<Payment2/>}></Route>
          <Route path="/Products/cart/checkout/payment2/otp" element={<Otp/>}></Route>
          <Route path="/Products/cart/checkout/payment2/otp/thanks" element={<Thanks/>}></Route>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path='/Profile' element={<Profile/>}></Route>
          <Route path="/Products" element={<Products />} />
          <Route path="/Products/:id" element={<Pro />} />
      </Routes>
      
    </div>
  );
};

export default MainRoutes;
