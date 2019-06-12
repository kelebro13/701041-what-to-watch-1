import {userSelector} from "../../reducer/user/selectors";
import {connect} from "react-redux";
import Header from "./header";

const mapStateToProps = (state) => {
  return {
    user: userSelector(state)
  };
};

export default connect(mapStateToProps)(Header);
