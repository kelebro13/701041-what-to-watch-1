import {Switch, Route} from 'react-router-dom';
import SingIn from "../sing-in/sing-in.connect";
import MainPage from "../main-page/main-page.connection";
import MyList from "../my-list/my-list";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={MainPage}/>
      <Route path="/mylist" exact component={MyList}/>
      <Route path="/login" component={SingIn}/>
    </Switch>
  );
};

App.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired,
};

export default App;
