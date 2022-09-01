import { useState } from "react";
import { FormEvent, useContext } from "react";
import PageContext from "../../store/page-context";
import { Page } from "../../constants/constants";

import Option from "../UI/Option";
import Button from "../UI/Button";
import Dropdown from "../UI/Dropdown";
import Textarea from "../UI/Textarea";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./OptionForm.module.css";

const OptionForm = () => {
  const { displayPage } = useContext(PageContext);
  const [cancelOption, setCancelOption] = useState<string>("");

  const onBackHandler = (): void => {
    displayPage(Page.MAIN);
  };

  const onSubmitForm = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitForm}>
      <Option
        label="I didn't realize it was a recurring membership"
        id="o1"
        name="option"
        // onChange={(e: string) => cancelOption(e)}
      />
      <Option label="Found a better solution" id="o2" name="option" />

      {/* <Textarea
        id="better-solution-textarea"
        placeholder="What is the better solution? If you don't mind sharing. Your feedback is much appreaciated!"
      /> */}

      <Option label="It's too expensive" id="o3" name="option" />
      <Option label="Bugs, things not working properly" id="o5" name="option" />

      <Dropdown label="Which product(s) did you have an issue with?" />

      {/* <label htmlFor="bug-option-textarea">
        <b>What was it?</b>
        <FontAwesomeIcon icon={faCircleExclamation} />
      </label> */}

      <Textarea
        id="product-issue-textarea"
        label="What problem(s) did you encounter?"
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
        <Button type="submit" label="Cancel Membership" />
      </div>
    </form>
  );
};

export default OptionForm;
