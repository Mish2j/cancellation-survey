import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Button.module.css";

import { ButtonProps } from "../../types";

const Button: React.FC<ButtonProps> = ({
  variant,
  type,
  icon,
  label,
  disabled,
  onClick,
}) => {
  const btnStyles = `${styles.btn} ${
    variant === "primary"
      ? styles.primary
      : variant === "text"
      ? styles.text
      : variant === "textIcon"
      ? styles.textIcon
      : variant === "icon"
      ? styles.icon
      : variant === "iconBg"
      ? styles.iconBg
      : variant === "disabled"
      ? styles.disabled
      : variant === "danger"
      ? styles.danger
      : ""
  }`.trim();

  console.log(variant);

  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={btnStyles}
      disabled={disabled}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {label && label}
    </button>
  );
};

export default Button;
