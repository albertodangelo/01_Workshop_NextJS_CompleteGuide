import React, { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = (props) => {
  const titleRef = useRef();
  const imgRef = useRef();
  const addressRef = useRef();
  const descRef = useRef();

  const formHandler = (event) => {
    event.preventDefault();

    const formInput = [
      {
        title: titleRef.current.value,
        image: imgRef.current.value,
        address: addressRef.current.value,
        desc: descRef.current.value,
      },
    ];

    console.log(formInput);
    props.formHandler(formInput);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={formHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meeting Titel</label>
          <input type="text" required id="title" ref={titleRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Bild</label>
          <input type="url" required id="image" ref={imgRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Adresse</label>
          <input type="text" required id="address" ref={addressRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Beschreibung</label>
          <textarea id="description" required rows="5" ref={descRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Meeting hinzufügen</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
