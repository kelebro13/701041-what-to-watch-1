import UserBlock from "../user-block/user-block";
import LogoLink from "../logo-link/logo-link";

const Header = (props) => {
  const {user, isMain, className, renderTitle, hiddenUserBlock} = props;

  return (
    <header className={`page-header ${className !== undefined ? className : ``}`}>
      <div className="logo">
        <LogoLink className={`logo__link`} isMain={isMain}/>
      </div>
      {renderTitle && renderTitle()}
      {!hiddenUserBlock && <UserBlock user={user}/>}
    </header>
  );
};

Header.propTypes = {
  isMain: PropTypes.bool,
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
