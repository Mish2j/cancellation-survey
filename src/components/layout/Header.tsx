import { useContext } from "react";
import PageContext from "../../store/page-context";
import { Page } from "../../constants/constants";

import styles from "./Header.module.css";
import Button from "../UI/Button";

const Header: React.FC = () => {
  const { displayPage } = useContext(PageContext);

  const onPageChange = (): void => {
    displayPage(Page.DISCOUNT);
  };

  return (
    <header className={styles.header}>
      <div className="wrapper">
        <nav>
          <ul>
            <li>
              <a href="/">My Account</a>
            </li>
            <li>
              <Button label="Cancel My Subscription" onClick={onPageChange} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
