import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import QuestionBox from "./QuestionBox";

import styles from "./Dropdown.module.css";

const Dropdown: React.FC<{ label?: string }> = ({ label }) => {
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

  return (
    <QuestionBox>
      <label>
        <b>{label}</b>
        <FontAwesomeIcon icon={faCircleExclamation} />
      </label>
      <fieldset
        className={`${styles.fieldset} ${isDropdownOpen && styles.open}`}
      >
        {isDropdownOpen && <legend>Select Product (s)</legend>}
        <div className={styles.dropdown}>
          <div className={styles.heading} onClick={toggleDropdownHandler}>
            <p>
              {selected
                ? `${selected} products selected`
                : "Select Product (s)"}
              <FontAwesomeIcon
                icon={isDropdownOpen ? faAngleUp : faAngleDown}
              />
            </p>
          </div>
          {isDropdownOpen && (
            <div className={styles.dropdownOptions}>
              <div>
                <input
                  id="product-1"
                  type="checkbox"
                  onChange={userSelectHandler}
                />
                <label htmlFor="product-1">Product #1</label>
              </div>
              <div>
                <input
                  id="product-2"
                  type="checkbox"
                  onChange={userSelectHandler}
                />
                <label htmlFor="product-2">Product #2</label>
              </div>
              <div>
                <input
                  id="product-3"
                  type="checkbox"
                  onChange={userSelectHandler}
                />
                <label htmlFor="product-3">Product #3</label>
              </div>
            </div>
          )}
        </div>
      </fieldset>
    </QuestionBox>
  );
};

export default Dropdown;
