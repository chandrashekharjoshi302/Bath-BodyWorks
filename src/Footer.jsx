import styles from "../css/footer.module.css";
import footerData from "../data/footer.json";
import { FList } from "./subFooter";

export const Footer = () => {
  let Fsocial = footerData.footerSocial;
  let Fdata = footerData.footerData;
  let footerLastData = footerData.footerLastData;
  return (
    <div className={styles.footer}>
      <div className={styles.mainDiv}>
        <div className={styles.innerDiv}>
          <div>
            <p>Get email offers & the latest news from Bath & Body Works!</p>
            <label htmlFor="email">Enter Email</label>
            <div>
              <input id="email" type="text" />
              <img
                src="https://cdn-icons-png.flaticon.com/512/545/545674.png"
                alt=""
              />
            </div>
            <label htmlFor="Cemail">Confirm Email</label>
            <div>
              <input id="Cemail" type="text" />
              <button>Submit</button>
            </div>

            <h4>GET CONNECTED</h4>
            <div>
              {Fsocial.map((el, i) => {
                return <img key={i} src={el} alt="" />;
              })}
            </div>
          </div>
          {Fdata.map((el) => {
            return (
              <div key={el.id}>
                <FList {...el} />
              </div>
            );
          })}
        </div>
        <div className={styles.imgDiv}>
          <img
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0c8e6af7/images/evergreen/Happiness_Guaranteedtimes2_v2.jpg?yocs=o_s_"
            alt=""
          />
        </div>
      </div>
      <div className={styles.lastDiv}>
        <div className={styles.termDiv}>
          {footerLastData.map((el, i) => {
            return <p key={i}> {el} |</p>;
          })}
        </div>
        <div>© 2022 Bath & Body Works Direct, Inc. All Rights Reserved.</div>
      </div>
    </div>
  );
};
