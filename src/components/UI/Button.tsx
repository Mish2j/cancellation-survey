import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Button.module.css";

type buttonSize = "small" | "large";
type buttonTypes = "button" | "submit" | "reset" | undefined;

interface ButtonProps {
  type?: buttonTypes;
  size?: buttonSize;
  outlined?: boolean;
  icon?: any;
  label?: string;
  color?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

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
