import React from 'react';
import styles from './Thanks.module.css';
import { Link } from 'react-router-dom';

const Thanks = () => {
    return (
      <div className={styles.containerThanks}>
        <div className={styles.content}>
          
          <h1>Thank You!</h1>
       
         
          <p>
            <strong>Please check your email!</strong> for further instructions.
          </p>

          <p>
            Having trouble? <Link to="/">Contact us</Link>
          </p>
          <p>
          <Link to="/">
            <button>Continue to homepage</button>
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Thanks;
