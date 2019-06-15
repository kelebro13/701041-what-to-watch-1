import UserProfile from "../user-profile/user-profile";
import LogoLink from "../logo-link/logo-link";

const Header = (props) => {
  const {user, isIndexPage, className, children, hiddenUserProfile} = props;

  return (
    <header className={`page-header ${className !== undefined ? className : ``}`}>
      <div className="logo">
        <LogoLink className={`logo__link`} isMain={isIndexPage}/>
      </div>
      {children}
      {!hiddenUserProfile && <UserProfile user={user}/>}
    </header>
  );
};

Header.propTypes = {
  isIndexPage: PropTypes.bool,
  hiddenUserProfile: PropTypes.bool,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired
  }),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

export default Header;
