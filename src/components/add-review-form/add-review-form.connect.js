import {connect} from "react-redux";
import {addReviewRequest} from "../../api/operations";
import AddReviewForm from "./add-review-form";
import withDisabledState from "../../hoc/with-disabled-state/with-disabled-state";

const mapDispatchToProps = {
  addReviewRequest
};

export default connect(null, mapDispatchToProps)(withDisabledState(AddReviewForm));
