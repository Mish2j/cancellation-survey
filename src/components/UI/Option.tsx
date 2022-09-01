import styles from "./Option.module.css";

interface OptionProps {
  label: string;
  id: string;
  name: string;
}

const Option: React.FC<OptionProps> = ({ label, id, name }) => {
  return (
    <div className={styles.radioContainer}>
      <input type="radio" id={id} name={name} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Option;
