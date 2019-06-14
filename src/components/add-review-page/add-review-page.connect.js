import {connect} from "react-redux";
import {filmSelector} from "../../reducer/data/selectors";
import AddReviewPage from "./add-review-page";

const mapStateToProps = (state, ownProps) => {
  return {
    film: filmSelector(state, ownProps.match.params.id)
  };
};

export default connect(mapStateToProps)(AddReviewPage);
