import {connect} from "react-redux";
import {favoriteFilmsSelector} from "../../reducer/data/selectors";
import {loadFavoriteFilmsRequest} from "../../api/operations";
import MyListPage from "./my-list-page";

const mapStateToProps = (state) => {
  return {
    films: favoriteFilmsSelector(state)
  };
};

const mapDispatchToProps = {
  loadFavoriteFilmsRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(MyListPage);
