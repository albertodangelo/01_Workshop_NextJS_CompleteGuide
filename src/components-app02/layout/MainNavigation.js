import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store-app02/favorite-context";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const cxt = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetings</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favoriten">
            Favoriten
            <span className={classes.badge}>{cxt.totalFavorites}</span>
          </Link>
        </li>
        <li>
          <Link to="/meetup">Neues Meeting</Link>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
