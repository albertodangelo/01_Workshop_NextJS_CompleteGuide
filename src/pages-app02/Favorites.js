import { useContext } from "react";
import MeetupList from "../components-app02/meetups/MeetupList";
import FavoritesContext from "../store-app02/favorite-context";

const Favorites = () => {
  const ctx = useContext(FavoritesContext);

  if (ctx.totalFavorites === 0) {
    return <p>No Favorite found.</p>;
  }

  return <MeetupList meetups={ctx.favorites} />;
};

export default Favorites;
