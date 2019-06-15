import {connect} from "react-redux";
import {updateFavoriteFilmRequest} from "../../api/operations";
import AddFavoriteFilmButton from "./add-favorite-button";

const mapDispatchToProps = {
  updateFavoriteFilmRequest
};

export default connect(null, mapDispatchToProps)(AddFavoriteFilmButton);
