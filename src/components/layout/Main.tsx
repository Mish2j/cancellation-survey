import { ReactElement, useContext } from "react";
import PageContext from "../../store/page-context";
import { Page } from "../../constants/constants";

import Survey from "../survey/Survey";

const Main: React.FC = () => {
  const { activePage } = useContext(PageContext);

  let currentPage: ReactElement | null;

  currentPage = null;

  if (activePage === Page.SURVEY) {
    currentPage = <Survey />;
  }

  return <main className={`wrapper`}>{currentPage}</main>;
};

export default Main;
