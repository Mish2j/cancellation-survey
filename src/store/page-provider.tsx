import { useState } from "react";
import { Page } from "../constants/constants";
import PageContext from "./page-context";

import { PageContextInterface } from "../types";

const PageContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // const [page, setPage] = useState<string>(Page.MAIN); DEF
  const [page, setPage] = useState<string>(Page.SURVEY);

  const onPageChange = (page: string): void => {
    setPage(page);
  };

  const pageCtxValue: PageContextInterface = {
    activePage: page,
    displayPage: onPageChange,
  };

  return (
    <PageContext.Provider value={pageCtxValue}>{children}</PageContext.Provider>
  );
};

export default PageContextProvider;
