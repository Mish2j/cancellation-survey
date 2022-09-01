import styles from "./Option.module.css";

import { OptionProps } from "../../types";

const Option: React.FC<OptionProps> = ({ label, id, name, onChange }) => {
  // const onValueChangeHandler = (event: Event) => {
  //   onChange(event);
  // };

  return (
    <div className={styles.radioContainer}>
      <input type="radio" id={id} name={name} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Option;
