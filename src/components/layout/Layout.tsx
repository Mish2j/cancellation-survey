import { useContext } from "react";

import PageContext from "../../store/page-context";
import { Page } from "../../constants/constants";

import Header from "../../components/layout/Header";
import Main from "../../components/layout/Main";
import Overlay from "../../components/UI/Overlay";

const Layout: React.FC = () => {
  const { activePage } = useContext(PageContext);

  return (
    <>
      {activePage === Page.DISCOUNT && <Overlay />}
      <Header />
      <Main />
    </>
  );
};

export default Layout;
