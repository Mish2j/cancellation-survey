import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./Container.module.css";

interface ContainerProps {
  closeIcon?: boolean;
  children?: React.ReactNode;
}
// type containerPadding = "small" | "large";

const Container: React.FC<ContainerProps> = ({ closeIcon, children }) => {
  const containerStyles = `${styles.container}`;

  return (
    <div className={containerStyles}>
      {closeIcon && (
        <div className={styles.closeBtn}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      )}
      {children}
    </div>
  );
};

export default Container;
