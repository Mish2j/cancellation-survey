import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

import styles from "./Textarea.module.css";

interface TextareaProps {
  id?: string;
  label?: string;
  placeholder?: string;
}

const Textarea: React.FC<TextareaProps> = ({ id, label, placeholder }) => {
  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={id}>
          <b>{label}</b>
          <FontAwesomeIcon icon={faCircleExclamation} />
        </label>
      )}
      <textarea placeholder={placeholder} id={id} rows={4}></textarea>
    </div>
  );
};

export default Textarea;
