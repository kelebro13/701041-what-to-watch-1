import {Switch, Route} from 'react-router-dom';
import RoutePath from "../../routes";
import withAuthorization from "../../hoc/with-authorization/with-authorization";
import SingInPage from "../sing-in-page/sing-in-page";
import MainPage from "../main-page/main-page.connection";
import MyListPage from "../my-list-page/my-list-page";
import MoviePage from "../movie-page/movie-page.connect";

const App = () => {
  return (
    <Switch>
      <Route path={RoutePath.INDEX} exact component={MainPage}/>
      <Route path={RoutePath.MY_LIST} exact component={withAuthorization(MyListPage)}/>
      <Route path={`${RoutePath.FILM}/:id`} component={MoviePage}/>
      <Route path={RoutePath.LOGIN} component={SingInPage}/>
    </Switch>
  );
};

export default App;
