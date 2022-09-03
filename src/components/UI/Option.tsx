import styles from "./Option.module.css";

import { OptionProps } from "../../types";

const Option: React.FC<OptionProps> = ({
  label,
  id,
  name,
  value,
  onStateChange,
}) => {
  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    onStateChange(event.target.value);
  };

  return (
    <div className={styles.radioContainer}>
      <input
        value={value}
        type="radio"
        id={id}
        name={name}
        onChange={onChangeHandler}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Option;
