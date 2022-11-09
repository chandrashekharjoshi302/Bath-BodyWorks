import styles from "../css/profile.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import signupData from "../data/signup.json";
export const Profile = () => {
  const navigate = useNavigate();
  let data = signupData.signupData;
  const [toggle, settoggle] = useState(true);
  const [inpuType, setInputType] = useState("password");
  const [profile, setProfile] = useState(true);
  const handleClick = (input) => {
    settoggle(input);
    if (input) {
      setInputType("password");
    } else {
      setInputType("text");
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();

    const username = e.target.mail.value;
    const password = e.target.password.value;
    console.log(username,password)
    if (username && password) {
      axios
        .post("https://masai-api-mocker.herokuapp.com/auth/login", {
          username,
          password,
        })
        .then(function (response) {
          console.log(response);
          navigate("/");
        })
        .catch(function (error) {
          console.log(error);
          alert("fill correct email & password");
        });
    } else {
      alert("fill all details");
    }
  };
  const handleSignup = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const username = e.target.cmEmail.value;
    const password = e.target.password.value;
    const mobile = e.target.mobile.value;
    const description = "";
    if (name && email && username && password && mobile) {
      if (username == email) {
        axios
          .post("https://masai-api-mocker.herokuapp.com/auth/register", {
            name,
            email,
            username,
            password,
            mobile,
            description,
          })
          .then(function (response) {
            if(response.error){
              alert(response.massage)
            }
            else{
            setProfile(true);
            }
          })
          .catch(function (error) {
            alert(error)
          });
      } else {
        alert("email not matched");
      }
    } else {
      alert("fill all details");
    }
  };

  return (
    <>
      {profile ? (
        <div className={styles.Profile}>
          <div className={styles.mainDiv}>
            <img
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw67bc4699/images/banners/sign-in_d.png?yocs=s_"
              alt=""
            />
          </div>
          <div className={styles.titleDiv}>Sign In or Sign Up</div>
          <div className={styles.inputDiv}>
            <div className={styles.signin}>
              <h2>SIGN IN</h2>
              <p>If you already have an account with us, sign in below</p>
              <form onSubmit={(e) => handleLogin(e)}>
                <label htmlFor="mail">Email Address</label>
                <input type="email" name="mail" id="mail" />
                <label htmlFor="password">Password</label>
                <div className={styles.passDiv}>
                  <input type={inpuType} name="password" id="pass" />
                  {toggle ? (
                    <div onClick={() => handleClick(false)}>SHOW</div>
                  ) : (
                    <div onClick={() => handleClick(true)}>HIDE</div>
                  )}
                </div>
                <div className={styles.forgot}>
                  <Link to={"/"}>Forgot Password?</Link>
                  <div>
                    <label htmlFor="Remember">Remember Me</label>
                    <input
                      style={{ width: "20px" }}
                      type="checkbox"
                      name="Remember"
                    />
                  </div>
                </div>
                <input
                  type="submit"
                  value="SIGN IN"
                  className={styles.btn}
                  styles={{ width: "20px" }}
                />
              </form>
            </div>
            <div className={styles.signup}>
              <h2>SIGN UP</h2>
              <p>Create an account to access the best of your favorite store</p>
              <img
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwf946a6ac/images/loyalty/July19/nonloyalty_5thmkt_signuptile_D.png?yocs=s_"
                alt=""
              />
              <div onClick={() => setProfile(false)} className={styles.btn}>
                CREATE AN ACCOUNT
              </div>
            </div>
          </div>
          <div className={styles.lastDiv}>
            <p>QUESTIONS?</p>
            <p> We’re here for you! Call us at 1-800-756-5005.</p>
          </div>
        </div>
      ) : (
        <div className={styles.Profile}>
          <div className={styles.mainDiv}>
            <img
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw6f07f823/images/banners/create-account_d.png?yocs=s_"
              alt=""
            />
          </div>
          <div className={styles.titleDiv}>Create an Account</div>
          <div className={styles.signupDiv}>
            <form onSubmit={(e) => handleSignup(e)}>
              {data.map((el, i) => {
                return (
                  <div key={i}>
                    <label htmlFor={el.name}>*{el.label}</label>
                    <input type="text" name={el.name} id={el.name} />
                  </div>
                );
              })}
              <div>
                <label htmlFor="password">*Password</label>
                <div className={styles.passDiv}>
                  <input type={inpuType} name="password" id="password" />
                  {toggle ? (
                    <div onClick={() => handleClick(false)}>SHOW</div>
                  ) : (
                    <div onClick={() => handleClick(true)}>HIDE</div>
                  )}
                </div>
              </div>
              <input
                type="submit"
                className={styles.btn}
                value="CREATE AN ACCOUNT"
              />
            </form>
          </div>
          <div className={styles.lastDiv}>
            <p>QUESTIONS?</p>
            <p> We’re here for you! Call us at 1-800-756-5005.</p>
          </div>
        </div>
      )}
    </>
  );
};
