import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import QuestionBox from "./QuestionBox";

import { DropdownProps } from "../../types";

import styles from "./Dropdown.module.css";

const Dropdown: React.FC<DropdownProps> = ({ title, labels, legend }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<Boolean>(false);
  const [selected, setSelected] = useState<number>(0);

  const toggleDropdownHandler = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const userSelectHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected((prevState) =>
      event.target.checked
        ? (prevState = prevState + 1)
        : (prevState = prevState - 1)
    );
  };

  const products = labels.map((label, index) => {
    return (
      <div key={label}>
        <input
          id={`checkbox-${index}`}
          type="checkbox"
          onChange={userSelectHandler}
        />
        <label htmlFor={`checkbox-${index}`}>{label}</label>
      </div>
    );
  });

  return (
    <QuestionBox>
      <label>
        <b>{title}</b>
        <FontAwesomeIcon icon={faCircleExclamation} />
      </label>
      <fieldset
        className={`${styles.fieldset} ${isDropdownOpen && styles.open}`}
      >
        {isDropdownOpen && <legend>{legend}</legend>}
        <div className={styles.dropdown}>
          <div className={styles.heading} onClick={toggleDropdownHandler}>
            <p>
              {selected ? `${selected} product(s) selected` : legend}
              <FontAwesomeIcon
                icon={isDropdownOpen ? faAngleUp : faAngleDown}
              />
            </p>
          </div>
          {isDropdownOpen && (
            <div className={styles.dropdownOptions}>{products}</div>
          )}
        </div>
      </fieldset>
    </QuestionBox>
  );
};

export default Dropdown;
