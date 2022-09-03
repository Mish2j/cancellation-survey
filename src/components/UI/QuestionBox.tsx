import styles from "./QuestionBox.module.css";

const QuestionBox: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default QuestionBox;
