import {connect} from "react-redux";
import {singInRequest} from '../../api/operations';
import SingInForm from "./sing-in-form";

const mapDispatchToProps = {
  singInRequest
};

export default connect(null, mapDispatchToProps)(SingInForm);
