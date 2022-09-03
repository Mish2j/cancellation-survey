import { useContext } from "react";
import PageContext from "../../store/page-context";
import { Page } from "../../constants/constants";

import OptionForm from "./OptionForm";
import Button from "../UI/Button";

import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "./Survey.module.css";

const Survey = () => {
  const { displayPage } = useContext(PageContext);

  const onBackHandler = (): void => {
    displayPage(Page.MAIN);
  };

  return (
    <>
      <div className={styles.pageTitle}>
        <Button variant="iconBg" onClick={onBackHandler} icon={faAngleLeft} />
        <h2>Cancellation Survey</h2>
      </div>
      <div className={styles.container}>
        <header>
          <h2>We're sad to see you go...</h2>
          <p>Can you tell us why you want to cancel your membership?</p>
        </header>
        <OptionForm />
      </div>
    </>
  );
};

export default Survey;
