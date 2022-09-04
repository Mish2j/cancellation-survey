import { useContext } from "react";

import ModalContext from "../../store/modal-context";
import PageContext from "../../store/page-context";
import { Page } from "../../constants/constants";

import Button from "../UI/Button";

const logo = require("../../assets/images/Icon-discount.png");
import styles from "./Discount.module.css";

const Discount: React.FC = () => {
  const { displayPage } = useContext(PageContext);
  const { closeModal } = useContext(ModalContext);

  const cancelSubHandler = () => {
    closeModal();
    displayPage(Page.SURVEY);
  };

  const getDiscountHandler = () => {
    closeModal();
    alert("Enjoy 50% discount for 6 months");
    displayPage(Page.MAIN);
  };

  return (
    <>
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
    </>
  );
};

export default Discount;
