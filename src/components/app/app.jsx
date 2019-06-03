import {Switch, Route} from 'react-router-dom';
import SingIn from "../sing-in/sing-in.connect";
import MainPage from "../main-page/main-page.connection";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={MainPage}/>
      <Route path="/mylist" exact component={MainPage}/>
      <Route path="/login" component={SingIn}/>
    </Switch>
  );
};

App.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired,
};

export default App;
