import { useState } from "react";
import styles from "../css/dropDown.module.css";
import Title from "../data/dropDown.json";
import {Link} from "react-router-dom"

export const Dropdown = () => {
  let data = Title.Title;
  const [sublist, setsublist] = useState([]);
  return (
    <div className={styles.mainDiv}>
      <div>
      {data.map((el, i) => {
        return (
            <div  key={i} className={styles.optionDiv}>
              <p
                 onMouseOver={() => setsublist(el.list[0].sublist)}
                 onMouseOut={() => setsublist([])}
              >
                {el.title}
              </p>
              <div className={styles.mainHovar}>
                <div>
                <div>
                  <div>
                    {el.list.map((el, i) => {
                      return (
                        
                          <div key ={i}
                            onMouseOver={() => setsublist(el.sublist)}
                            onBlur={() => setsublist([])}
                            className={styles.listDiv}
                          >
                            <Link to={"/"}>{el.listTitle}</Link>
                            {el.sublist.length > 0 ? (
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/709/709586.png"
                                alt=""
                              />
                            ) : (
                              ""
                            )}
                          </div>
                      );
                    })}
                  </div>
                  <div className={styles.sublist}>
                    {sublist.map((el, i) => {
                      return <Link to={"/Products"} key={i}>{el}</Link>;
                    })}
                  </div>
                </div>
                <div className={styles.staticDiv}>
                  {el.staticData.map((el, i) => {
                    return <div key={i}>{el}</div>;
                  })}
                </div>
                </div>
              </div>
            </div>
        );
      })}
      </div>
    </div>
  );
};
