import {connect} from "react-redux";
import {isAuthorizationRequiredSelector} from "../../reducer/user/selectors";
import App from "./app";

const mapStateToProps = (state) => {
  return {
    isAuthorizationRequired: isAuthorizationRequiredSelector(state),
  };
};

export default connect(
    mapStateToProps)(App);
