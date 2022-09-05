import { memo } from "react";

import { OptionProps } from "../../types";

import styles from "./Option.module.css";

const Option: React.FC<OptionProps> = ({
  label,
  id,
  name,
  value,
  onOptionChange,
}) => {
  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    onOptionChange(event.target.value);
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

export default memo(Option);
