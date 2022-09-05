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
  const [checkedState, setCheckedState] = useState<boolean[]>(
    new Array(labels.length).fill(false)
  );

  const toggleDropdownHandler = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const userSelectHandler = (
    position: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelected((prevState) =>
      event.target.checked
        ? (prevState = prevState + 1)
        : (prevState = prevState - 1)
    );

    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  const items = labels.map((label, index) => {
    return (
      <div key={label}>
        <input
          name={label}
          id={`checkbox-${index + 1}`}
          type="checkbox"
          onChange={userSelectHandler.bind(null, index)}
          checked={checkedState[index]}
        />
        <label htmlFor={`checkbox-${index + 1}`}>{label}</label>
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
            <div className={styles.dropdownOptions}>{items}</div>
          )}
        </div>
      </fieldset>
    </QuestionBox>
  );
};

export default Dropdown;
