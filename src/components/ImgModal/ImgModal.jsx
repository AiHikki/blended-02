import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement('#root');

const ImgModal = ({modalIsOpen, closeModal, src, alt}) => {
  return <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  style={customStyles}
>
    <img src={src.large} alt={alt} />
</Modal>;
};

export default ImgModal;
