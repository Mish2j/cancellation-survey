import React from "react";
import { ModalContextInterface } from "../types";

const initialState: ModalContextInterface = {
  isOpen: false,
  openModal() {},
  closeModal() {},
};

const ModalContext = React.createContext(initialState);

export default ModalContext;
