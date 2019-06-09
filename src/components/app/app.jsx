import {Switch, Route} from 'react-router-dom';
import RoutePath from "../../routes";
import withAuthorization from "../../hoc/with-authorization/with-authorization";
import SingIn from "../sing-in/sing-in";
import MainPage from "../main-page/main-page.connection";
import MyList from "../my-list/my-list";
import MoviePage from "../movie-page/movie-page.connect";

const App = () => {
  return (
    <Switch>
      <Route path={RoutePath.INDEX} exact component={MainPage}/>
      <Route path={RoutePath.MY_LIST} exact component={withAuthorization(MyList)}/>
      <Route path={`${RoutePath.FILM}/:id`} component={MoviePage}/>
      <Route path={RoutePath.LOGIN} component={SingIn}/>
    </Switch>
  );
};

export default App;
