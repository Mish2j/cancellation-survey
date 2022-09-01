import Container from "../UI/Container";
import Discount from "../discount/Discount";
import Survey from "../survey/Survey";

import styles from "./Main.module.css";

const Main: React.FC = () => {
  return (
    <main className={`${styles.main} wrapper`}>
      <Container closeIcon={true}>
        <Discount />
      </Container>

      {/* <Container>
        <Survey />
      </Container> */}
    </main>
  );
};

export default Main;
