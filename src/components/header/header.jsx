import UserProfile from "../user-profile/user-profile";
import LogoLink from "../logo-link/logo-link";

const Header = (props) => {
  const {user, isIndexPage, className, renderTitle, hiddenUserBlock} = props;

  return (
    <header className={`page-header ${className !== undefined ? className : ``}`}>
      <div className="logo">
        <LogoLink className={`logo__link`} isMain={isIndexPage}/>
      </div>
      {renderTitle && renderTitle()}
      {!hiddenUserBlock && <UserProfile user={user}/>}
    </header>
  );
};

Header.propTypes = {
  isIndexPage: PropTypes.bool,
  hiddenUserBlock: PropTypes.bool,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired
  }),
  className: PropTypes.string,
  renderTitle: PropTypes.func,
};

export default Header;
