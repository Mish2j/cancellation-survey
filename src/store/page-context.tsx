import { createContext } from "react";
import { Page } from "../constants/constants";

import { PageContextInterface } from "../types";

const initialState: PageContextInterface = {
  // activePage: Page.MAIN, DEFF
  activePage: Page.SURVEY,
  displayPage: (page: string): void => {},
};

const PageContext = createContext(initialState);

export default PageContext;
