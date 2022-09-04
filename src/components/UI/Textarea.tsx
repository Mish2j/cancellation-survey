import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

import styles from "./Textarea.module.css";
import QuestionBox from "./QuestionBox";

import { TextareaProps } from "../../types";

const Textarea: React.FC<TextareaProps> = ({ id, label, placeholder }) => {
  return (
    <QuestionBox>
      {label && (
        <label htmlFor={id}>
          <b>{label}</b>
          <FontAwesomeIcon icon={faCircleExclamation} />
        </label>
      )}
      <textarea
        className={styles.textarea}
        placeholder={placeholder}
        id={id}
        rows={4}
      ></textarea>
    </QuestionBox>
  );
};

export default Textarea;
