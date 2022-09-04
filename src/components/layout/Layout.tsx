import Header from "../../components/layout/Header";
import Main from "../../components/layout/Main";
import Modal from "../UI/Modal";
import Discount from "../discount/Discount";

const Layout: React.FC = () => {
  return (
    <>
      <Modal>
        <Discount />
      </Modal>
      <Header />
      <Main />
    </>
  );
};

export default Layout;
