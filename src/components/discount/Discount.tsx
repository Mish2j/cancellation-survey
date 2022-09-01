import Button from "../UI/Button";

import styles from "./Discount.module.css";

const logo = require("../../assets/images/Icon-discount.png");

const Discount: React.FC = () => {
  const cancelSubHandler = (): void => {
    console.log("ca");
  };

  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <img src={logo} alt="discount icon" />
      </div>
      <div>
        <h2>
          Before You Go...
          <br />
          Would 50% Off For 6 Months Help?
        </h2>
        <p className={styles.margin}>
          We know things REALLY suck in the world right now - and many
          businesses and freelancers are struggling to stay afloat during this
          COVID-19 crisis.
        </p>
        <p>
          <b>
            So if you could use the extra cushion, grab 50% off for 6 months.
          </b>
        </p>
        <p>We hope you're staying safe and healthy!</p>
        <div className={styles.btnGroup}>
          <Button label="50% OFF For 6 Months" />
          <Button onClick={cancelSubHandler} label="No, thanks! I'll cancel" />
        </div>
      </div>
    </div>
  );
};

export default Discount;
