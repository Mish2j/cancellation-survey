import styles from "./Overlay.module.css";

const Overlay: React.FC<{ children?: JSX.Element | JSX.Element[] }> = () => {
  return <div className={styles.overlay}>Overlay</div>;
};

export default Overlay;
