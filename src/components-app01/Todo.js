import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = (props) => {
  const [modalState, changeModal] = useState(false);

  const onClickHandler = () => {
    console.log("schliessen clicked");
    console.log(`aus Komponente ${props.text}`);
    changeModal(true);
  };
  const closeWindow = () => {
    changeModal(false);
  };

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={onClickHandler}>
          schliessen
        </button>
      </div>

      {modalState ? <Backdrop closeWindow={closeWindow} /> : null}

      {/* Hier der Shorcut für den if else Code = wenn modalState true und Component true wird der zweite Wert angezeigt: */}
      {modalState && <Modal closeWindow={closeWindow} />}
    </div>
  );
};

export default Todo;
