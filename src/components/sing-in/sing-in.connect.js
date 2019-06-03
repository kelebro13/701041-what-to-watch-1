import {connect} from "react-redux";
import {singIn} from '../../reducer/user/user';
import SingIn from "./sing-in";

const mapDispatchToProps = {
  singIn
};

export default connect(null, mapDispatchToProps)(SingIn);
