import React, { useContext } from "react";
import FavoritesContext from "../../store-app02/favorite-context";
import classes from "./MeetupItem.module.css";

const MeetupItem = (props) => {
  const favoriteCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

  const toggleFavoriteHandler = () => {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  };

  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.title}</address>
        <p>{props.desc}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={toggleFavoriteHandler}>
          {itemIsFavorite ? "Remove from Favorite" : "Add to Favorite"}
        </button>
      </div>
    </li>
  );
};

export default MeetupItem;
