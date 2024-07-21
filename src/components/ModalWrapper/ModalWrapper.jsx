import Modal from "react-modal";
import css from "./ModalWrapper.module.css";
import sprite from "../../assets/icons/sprite.svg";

Modal.setAppElement("#root");

const ModalWrapper = ({
  children,
  modalIsOpen,
  onCloseModal,
  contentLabel,
}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0",
      borderRadius: "15px",
    },
    overlay: {
      backgroundColor: "rgba(17, 18, 19, 0.4)",
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      contentLabel={contentLabel}
    >
      <div className={css.nodalContent}>
        <button className={css.closeBtn} type="button" onClick={onCloseModal}>
          <svg className={css.closeIcon} width="32" height="32">
            <use href={`${sprite}#icon-Rating-1`}></use>
          </svg>
        </button>
        {children}
      </div>
    </Modal>
  );
};

export default ModalWrapper;
