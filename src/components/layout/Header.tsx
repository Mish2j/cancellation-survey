import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="wrapper">
        <nav>My Account</nav>
      </div>
    </header>
  );
};

export default Header;
