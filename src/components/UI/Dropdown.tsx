import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

import styles from "./Dropdown.module.css";

interface Dropdown {
  label?: string;
  value?: string;
  options?: { value: string; label: string }[];
  onChange?: () => {};
}

const Dropdown: React.FC<Dropdown> = ({ label, value, options, onChange }) => {
  //   const [value, setValue] = useState("fruit");

  //   const handleChange = (event: any) => {
  //     setValue(event.target.value);
  //   };

  return (
    <div className={styles.container}>
      <label>
        <b>{label}</b>
        <FontAwesomeIcon icon={faCircleExclamation} />
      </label>
      <select value={value} onChange={onChange}>
        {/* {options?.map((option: { value: string; label: string }) => (
          <option value={option.value}>{option.label}</option>
        ))} */}
        <option value="value">label</option>
        <option value="value">label</option>
        <option value="value">label</option>
      </select>
    </div>
  );
};

export default Dropdown;
