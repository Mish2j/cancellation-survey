import { useContext } from "react";
import PageContext from "../../store/page-context";
import { Page } from "../../constants/constants";

import Button from "../UI/Button";

const logo = require("../../assets/images/Icon-discount.png");
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./Discount.module.css";

const Discount: React.FC = () => {
  const { displayPage } = useContext(PageContext);

  const cancelSubHandler = () => {
    displayPage(Page.SURVEY);
  };

  const getDiscountHandler = () => {
    alert("Enjoy 50% discount for 6 months");
    displayPage(Page.MAIN);
  };

  const closeDiscountModalHandler = () => displayPage(Page.MAIN);

  return (
    <div className={styles.container}>
      <div className={styles.closeBtn}>
        <Button
          variant="icon"
          icon={faXmark}
          onClick={closeDiscountModalHandler}
        />
      </div>
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
          <Button
            variant="primary"
            label="50% OFF For 6 Months"
            onClick={getDiscountHandler}
          />
          <Button
            variant="text"
            onClick={cancelSubHandler}
            label="No, thanks! I'll cancel"
          />
        </div>
      </div>
    </div>
  );
};

export default Discount;
