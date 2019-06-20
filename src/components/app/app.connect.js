import {connect} from "react-redux";
import {loadUserRequest} from "../../api/operations";
import App from "./app";

const mapDispatchToProps = {
  loadUserRequest
};

export default connect(null, mapDispatchToProps)(App);
