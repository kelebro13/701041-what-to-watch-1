import {Link} from "react-router-dom";
import RoutePath from "../../routes";
import {SERVER_URL} from "../../api/api";
import {userType} from "../../types/types";

const UserProfile = (props) => {
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

UserProfile.propTypes = {
  user: userType
};

export default UserProfile;
