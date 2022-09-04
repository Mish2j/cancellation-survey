import React, { useState } from "react";

import ModalContext from "./modal-context";
import { ModalContextInterface } from "../types";

const ModalContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModalHandler = () => setIsOpen(true);
  const closeModalHandler = () => setIsOpen(false);

  const modalCtxValue: ModalContextInterface = {
    isOpen,
    openModal: openModalHandler,
    closeModal: closeModalHandler,
  };

  return (
    <ModalContext.Provider value={modalCtxValue}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
