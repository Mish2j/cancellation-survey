import { useContext } from "react";
import PageContext from "../../store/page-context";
import { Page } from "../../constants/constants";

import Discount from "../discount/Discount";
import Survey from "../survey/Survey";

const Main: React.FC = () => {
  const { activePage } = useContext(PageContext);

  return (
    <main className={`wrapper`}>
      {activePage === Page.MAIN ? null : (
        <>
          {activePage === Page.DISCOUNT && <Discount />}
          {activePage === Page.SURVEY && <Survey />}
        </>
      )}
    </main>
  );
};

export default Main;
