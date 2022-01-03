import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components-app02/meetups/NewMeetupForm";

const NewMeetup = () => {
  const history = useHistory();

  const handleFormData = (formData) => {
    console.log(formData);
    console.log("Sende Form");

    fetch(
      "https://react-refresher-tutorial-a461f-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      // replace() = keine zurückschalten
      // push() = zurück ist möglich
      history.replace("/");
    });
  };

  return <NewMeetupForm formHandler={handleFormData} />;
};

export default NewMeetup;
