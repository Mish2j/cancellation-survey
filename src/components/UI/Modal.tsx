import ReactDOM from "react-dom";
import { useContext } from "react";

import Overlay from "./Overlay";
import Button from "./Button";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import ModalContext from "../../store/modal-context";

import styles from "./Modal.module.css";

const Modal: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const { closeModal, isOpen } = useContext(ModalContext);

  const modalContent = (
    <>
      <Overlay />
      <div className={styles.container}>
        <div className={styles.closeBtn}>
          <Button variant="icon" icon={faXmark} onClick={closeModal} />
        </div>
        {children}
      </div>
    </>
  );

  return ReactDOM.createPortal(
    isOpen ? modalContent : null,
    document.getElementById("modal-root")! as HTMLDivElement
  );
};

export default Modal;
