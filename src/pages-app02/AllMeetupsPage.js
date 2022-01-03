import MeetupList from '../components-app02/meetups/MeetupList';
import { useState, useEffect } from 'react';
import { meetups } from '../data/react-refresher-tutorial-a461f-default-rtdb-export';

const AllMeetupsPage = () => {
  const [loading, setLoading] = useState(true);
  const [datacheck, setDatacheck] = useState([]);

  const data = meetups;

  useEffect(() => {
    setLoading(true);
    var meetups = [];
    for (const key in data) {
      const meetup = {
        id: key,
        ...data[key],
      };
      meetup[0].id = key;
      console.log(meetup[0]);
      meetups.push(meetup[0]);
    }

    setLoading(false);
    setDatacheck(meetups);

    /** HERE EXAMPLE OF EXTERNAL DATA */
    /* 
    fetch('../../data/react-refresher-tutorial-a461f-default-rtdb-export.json')
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        var meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetup[0].id = key;
          console.log(meetup[0]);
          meetups.push(meetup[0]);
        }

        setLoading(false);
        setDatacheck(meetups);
      }); */
  }, []);

  if (loading) {
    return <div>... Daten werden geladen</div>;
  }
  return (
    <section>
      <MeetupList meetups={datacheck} />
    </section>
  );
};
export default AllMeetupsPage;
