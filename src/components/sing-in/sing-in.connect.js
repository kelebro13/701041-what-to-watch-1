import {connect} from "react-redux";
import {singInRequest} from '../../reducer/user/operations';
import SingIn from "./sing-in";

const mapDispatchToProps = {
  singInRequest
};

export default connect(null, mapDispatchToProps)(SingIn);
