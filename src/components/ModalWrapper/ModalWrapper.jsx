import Modal from "react-modal";

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
      <div>
        <button type="button" onClick={onCloseModal}>
          X
        </button>
        {children}
      </div>
    </Modal>
  );
};

export default ModalWrapper;
