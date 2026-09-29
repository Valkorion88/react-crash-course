import './Modal.css'

function Modal({ question, hideModal }) {
  return (
    <>
      <div className="modal">
        <p className="modal__title">{question}</p>
        <div className="modal__buttons">
          <button
            onClick={hideModal}
            className="btn btn__cancel"
          >
            Cancel
          </button>
          <button onClick={hideModal} className="btn">
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal
