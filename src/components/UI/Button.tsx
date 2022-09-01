import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Button.module.css";

import { ButtonProps } from "../../types";

const Button: React.FC<ButtonProps> = ({
  type,
  size,
  outlined,
  icon,
  label,
  color,
  children,
  className,
  onClick,
}) => {
  const btnStyles = `${styles.btn}`;

  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={styles.btnLarge}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {label}
      {children}
    </button>
  );
};

export default Button;
