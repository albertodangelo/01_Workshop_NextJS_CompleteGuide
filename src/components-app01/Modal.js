const Modal = (props) => {
  return (
    <div className="modal">
      <p>Bist du sicher?</p>
      <button className="btn btn--alt">bestätigen</button>
      <button className="btn" onClick={props.closeWindow}>
        schliessen
      </button>
    </div>
  );
};

export default Modal;
