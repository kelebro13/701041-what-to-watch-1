import {Switch, Route} from 'react-router-dom';
import SingIn from "../sing-in/sing-in.connect";
import MainPage from "../main-page/main-page.connection";
import MyList from "../my-list/my-list";
import RoutePath from "../../routes";

const App = () => {
  return (
    <Switch>
      <Route path={RoutePath.INDEX} exact component={MainPage}/>
      <Route path={RoutePath.MY_LIST} exact component={MyList}/>
      <Route path={RoutePath.LOGIN} component={SingIn}/>
    </Switch>
  );
};

App.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired,
};

export default App;
