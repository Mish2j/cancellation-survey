import styles from "./Selectable.module.css";

const Selectable = () => {
  return (
    <div className={styles.container}>
      <fieldset>
        <legend>
          <b>What was it?</b>
        </legend>
        <div className={styles.options}>
          <input name="selectable" type="radio" id="major-problem" checked />
          <label htmlFor="major-problem">One Major Problem</label>
          <input name="selectable" type="radio" id="various-things" />
          <label htmlFor="various-things">Various things</label>
        </div>
      </fieldset>
    </div>
  );
};

export default Selectable;
