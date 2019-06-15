import {connect} from "react-redux";
import {addReviewRequest} from "../../api/operations";
import AddReviewForm from "./add-review-form";

const mapDispatchToProps = {
  addReviewRequest
};

export default connect(null, mapDispatchToProps)(AddReviewForm);
