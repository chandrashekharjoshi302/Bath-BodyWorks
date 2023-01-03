import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData } from "../redux/action";
import ProductsCard from "./ProductsCard";
import styles from "./Products.module.css";
import { sortProducts } from "../redux/action";
import { filterProducts } from "../redux/action";
import { Link } from "react-router-dom";

const Products = () => {
  const { products } = useSelector((state) => state);
  const dispatch = useDispatch(); 

  useEffect(() => {
    getProductsData(dispatch);
  }, [dispatch]);

  const handleSort = (e) => {
    dispatch(sortProducts(e.target.value));
  };

  const handlefilter = (e) => {
      dispatch(filterProducts(e.target.value));
  }

  return (
    <>
    {/* <Link to="/Products/cart">Cart page</Link> */}
    <div style={{ display: "flex" }}>
   
      <div
        style={{
          marginLeft: "30px",
          marginTop: "30px",
          textAlign: "left",
          cursor: "pointer",
        }}
      >
        <p>NEW & NOW</p>
        <p style={{ color: "grey" }}>ALL NEW ARRIVALS</p>
        <p style={{ color: "grey" }}>3 WICK CANDLES</p>
        <p style={{ color: "grey" }}>AROMATHERAPY</p>
        <p style={{ color: "grey" }}>MEN'S SHOP</p>
        <p>TOP OFFERS</p>
        <p>SHOP BY FRAGRANCE</p>
      </div>
      <div>
        <h1 className={styles.heading}>
          3 WICK CANDLES &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;39 items
        </h1>
        <hr className={styles.hr} />
        <div style={{ display: "flex", marginLeft: "1100px" }}>
          <h3 style={{ fontWeight: "lighter", marginRight: "10px" }}>
            SORT BY
          </h3>
          <select
            name=""
            id=""
            style={{ height: "40px", marginTop: "10px" }}
            onChange={handleSort}
          >
            <option value="">Best Matches</option>
            <option value="htol">Price High to Low</option>
            <option value="ltoh">Price Low to High</option>
            <option value="mp">Most Popular</option>
            <option value="ms">Most Sellars</option>
          </select>
        </div>
        <div className={styles.filter}>
          <select name="" className={styles.fragranceC} onChange={handlefilter}>
              <option value="">Fragrance Category</option>
              <option value="fresh">Fresh</option>
              <option value="floral">Floral</option>
              <option value="sweet">Sweet</option>
              <option value="fruity">Fruity</option>
          </select>
          <select name="" className={styles.fragranceT} onChange={handlefilter}>
              <option value="">Fragrance Type</option>
              <option value="fresh">Fresh type</option>
              <option value="floral">Floral type</option>
              <option value="sweet">Sweet type</option>
              <option value="fruity">Fruity type</option>
          </select>
          <select name="" className={styles.productT} onChange={handlefilter}>
              <option value="">Product Type</option>
              <option value="fresh">Fresh type</option>
              <option value="floral">Floral type</option>
              <option value="sweet">Sweet type</option>
              <option value="fruity">Fruity type</option>
          </select>
        </div>
        <div className={styles.mainDiv}>
          {products.map((e) => (
            <ProductsCard key={e.id} {...e} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Products;
