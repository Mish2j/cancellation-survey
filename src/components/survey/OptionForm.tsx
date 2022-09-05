import { useState } from "react";
import { FormEvent, useContext } from "react";
import PageContext from "../../store/page-context";
import { Page } from "../../constants/constants";
import { SurveyOption } from "../../constants/constants";

import Option from "../UI/Option";
import Button from "../UI/Button";
import Dropdown from "../UI/Dropdown";
import Textarea from "../UI/Textarea";
import Notification from "./Notification";
import Selectable from "../UI/Selectable";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "./OptionForm.module.css";

const OptionForm = () => {
  const { displayPage } = useContext(PageContext);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const onBackHandler = () => {
    displayPage(Page.MAIN);
  };

  const onSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    alert("Your subscription was successfully canceled.");
    displayPage(Page.MAIN);
  };

  const optionChangeHandler = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <Option
        onOptionChange={optionChangeHandler}
        value={SurveyOption.RECURRING_MEMBERSHIP}
        name="cancelOption"
        id="option-1"
        label="I didn't realize it was a recurring membership"
      />
      <Option
        onOptionChange={optionChangeHandler}
        value={SurveyOption.BETTER_SOLUTION}
        name="cancelOption"
        id="option-2"
        label="Found a better solution"
      />
      {selectedOption === SurveyOption.BETTER_SOLUTION && (
        <Textarea
          id="better-solution-textarea"
          placeholder="What is the better solution? If you don't mind sharing. Your feedback is much appreaciated!"
        />
      )}
      <Option
        onOptionChange={optionChangeHandler}
        value={SurveyOption.TOO_EXPENSIVE}
        name="cancelOption"
        id="option-3"
        label="It's too expensive"
      />
      <Option
        onOptionChange={optionChangeHandler}
        value={SurveyOption.BUGS}
        name="cancelOption"
        id="option-4"
        label="Bugs, things not working properly"
      />
      {selectedOption === SurveyOption.BUGS && (
        <>
          <Dropdown
            labels={["Product #1", "Product #2", "Product #3", "Product #4"]}
            legend="Select Product (s)"
            title="Which product(s) did you have an issue with?"
          />
          <Selectable
            legend="What was it?"
            labels={["One Major Problem", "Various things"]}
            optionName="selectable"
          />
          <Textarea
            id="product-issue-textarea"
            label="What problem(s) did you encounter?"
          />
        </>
      )}
      <Option
        onOptionChange={optionChangeHandler}
        value={SurveyOption.SINGLE_PLUGIN}
        name="cancelOption"
        id="option-5"
        label="I just want to pay for a single plugin"
      />
      <Option
        onOptionChange={optionChangeHandler}
        value={SurveyOption.NOT_USING}
        name="cancelOption"
        id="option-6"
        label="Not using WordPress anymore"
      />
      <Option
        onOptionChange={optionChangeHandler}
        value={SurveyOption.OTHER}
        name="cancelOption"
        id="option-7"
        label="Other"
      />
      <Notification />
      <div className={styles.btnGroup}>
        <Button
          variant="textIcon"
          onClick={onBackHandler}
          label="Back"
          icon={faArrowLeft}
        />

        <Button
          variant={selectedOption ? "danger" : "disabled"}
          disabled={!selectedOption}
          type="submit"
          label="Cancel Membership"
        />
      </div>
    </form>
  );
};

export default OptionForm;
