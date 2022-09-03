import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

import styles from "./Notification.module.css";

const Notification = () => {
  return (
    <div className={styles.notification}>
      <FontAwesomeIcon icon={faCircleExclamation} />
      <p>
        Are you absolutely sure you want to cancel? If you do you'll lose access
        to so many cool things. And you'll lose the chance to stay on this plan
        at the same cost ongoing (regardless of future price increases).
      </p>
    </div>
  );
};

export default Notification;
