import {Switch, Route} from 'react-router-dom';
import RoutePath from "../../routes";
import withAuthorization from "../../hoc/with-authorization/with-authorization";
import SingInPage from "../sing-in-page/sing-in-page";
import MainPage from "../main-page/main-page.connection";
import MyListPage from "../my-list-page/my-list-page.connect";
import MoviePage from "../movie-page/movie-page.connect";
import AddReviewPage from "../add-review-page/add-review-page.connect";

class App extends React.PureComponent {
  componentDidMount() {
    const {loadUserRequest} = this.props;
    if (loadUserRequest) {
      loadUserRequest();
    }
  }

  render() {
    return (
      <Switch>
        <Route path={RoutePath.INDEX} exact component={MainPage}/>
        <Route path={RoutePath.LOGIN} component={SingInPage}/>
        <Route path={RoutePath.MY_LIST} exact component={withAuthorization(MyListPage)}/>
        <Route path={`${RoutePath.FILM}/:id`} exact component={MoviePage}/>
        <Route path={`${RoutePath.FILM}/:id${RoutePath.ADD_REVIEW}`} exact
          component={withAuthorization(AddReviewPage)}/>
      </Switch>
    );
  }
}

App.propTypes = {
  loadUserRequest: PropTypes.func
};

export default App;
