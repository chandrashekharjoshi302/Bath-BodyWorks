import React from 'react'
import styles from './Progress.module.css'
import pic from "./payment_picture.png"

const Progress = () => {
  return (
    <div className={styles.progress}>
   <img style={{height:"120px" ,width:"400px"}} src={pic} alt="" />
    </div>
  );
}

export default Progress