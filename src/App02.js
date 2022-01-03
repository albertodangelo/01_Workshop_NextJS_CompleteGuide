import { Route, Switch } from "react-router-dom";
import Layout from "./components-app02/layout/Layout";
import AllMeetupsPage from "./pages-app02/AllMeetupsPage";
import Favorites from "./pages-app02/Favorites";
import NewMeetup from "./pages-app02/NewMeetup";

const app02 = () => {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetupsPage />
          </Route>
          <Route path="/favoriten">
            <Favorites />
          </Route>
          <Route path="/meetup">
            <NewMeetup />
          </Route>
        </Switch>
      </Layout>
    </>
  );
};
export default app02;
