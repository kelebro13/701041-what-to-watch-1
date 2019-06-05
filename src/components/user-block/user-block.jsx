import {Link} from "react-router-dom";
import RoutePath from "../../routes";
import {SERVER_URL} from "../../api";

const UserBlock = (props) => {
  const {user} = props;

  const renderAvatar = () => {
    return (
      <Link to={RoutePath.MY_LIST}>
        <div className="user-block__avatar">
          <img src={`${SERVER_URL}/${user.avatarUrl}`} alt={user.name} width="63" height="63"/>
        </div>
      </Link>
    );
  };

  const renderSingInLink = () => {
    return <Link to={RoutePath.LOGIN} className="user-block__link">Sign in</Link>;
  };

  return (
    <div className="user-block">
      {user ? renderAvatar() : renderSingInLink()}
    </div>
  );
};

UserBlock.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired
  })
};

export default UserBlock;
