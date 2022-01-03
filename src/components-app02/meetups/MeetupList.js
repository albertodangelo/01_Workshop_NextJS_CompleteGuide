import React from "react";
import Card from "../ui/Card";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

const MeetupList = (props) => {
  return (
    <>
      <ul className={classes.list}>
        {props.meetups.map((item) => {
          return (
            <Card key={item.id}>
              <MeetupItem
                id={item.id}
                image={item.image}
                content={item.content}
                description={item.description}
                title={item.title}
              />
            </Card>
          );
        })}
      </ul>
    </>
  );
};

export default MeetupList;
