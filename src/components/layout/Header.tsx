import { useContext } from "react";
import ModalContext from "../../store/modal-context";

import styles from "./Header.module.css";
import Button from "../UI/Button";

const Header: React.FC = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <header className={styles.header}>
      <div className="wrapper">
        <nav>
          <ul>
            <li>
              <a href="/">My Account</a>
            </li>
            <li>
              <Button
                variant="primary"
                label="Cancel My Subscription"
                onClick={openModal}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
