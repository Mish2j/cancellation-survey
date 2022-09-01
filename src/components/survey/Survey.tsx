import Title from "../UI/Title";
import Option from "../UI/Option";
import Container from "../UI/Container";
import Button from "../UI/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Survey.module.css";

const Survey = () => {
  const onBackHandler = (): void => {
    console.log("back");
  };

  return (
    <>
      <Title text="We're sad to see you go..." />
      <p className={styles.heading}>
        Can you tell us why you want to cancel your membership?
      </p>
      <form>
        <Option
          label="I didn't realize it was a recurring membership"
          id="o1"
          name="option"
        />
        <Option label="Found a better solution" id="o2" name="option" />
        <Option label="It's too expensive" id="o3" name="option" />
        <Option
          label="Bugs, things not working properly"
          id="o5"
          name="option"
        />

        <Option
          label="I just want to pay for a single plugin"
          id="o6"
          name="option"
        />

        <Option label="Not using WordPress anymore" id="o7" name="option" />
        <Option label="Other" id="o8" name="option" />
        <div className={styles.notification}>
          <FontAwesomeIcon icon={faCircleExclamation} />
          <p>
            Are you absolutely sure you want to cancel? If you do you'll lose
            access to so many cool things. And you'll lose the chance to stay on
            this plan at the same cost ongoing (regardless of future price
            increases).
          </p>
        </div>
        <div className={styles.btnGroup}>
          <Button onClick={onBackHandler} label="Back" icon={faArrowLeft} />
          <Button label="Cancel Membership" type="submit" />
        </div>
      </form>
    </>
  );
};

export default Survey;
