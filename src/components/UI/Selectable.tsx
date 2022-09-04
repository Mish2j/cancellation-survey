import { Fragment } from "react";
import { SelectableProps } from "../../types";

import styles from "./Selectable.module.css";

const Selectable: React.FC<SelectableProps> = ({
  legend,
  labels,
  optionName,
}) => {
  const options = labels.map((label, index) => {
    return (
      <Fragment key={label}>
        <input name={optionName} type="radio" id={`radio-option-${index}`} />
        <label htmlFor={`radio-option-${index}`}>{label}</label>
      </Fragment>
    );
  });

  return (
    <div className={styles.container}>
      <fieldset>
        <legend>
          <b>{legend}</b>
        </legend>
        <div className={styles.options}>{options}</div>
      </fieldset>
    </div>
  );
};

export default Selectable;
