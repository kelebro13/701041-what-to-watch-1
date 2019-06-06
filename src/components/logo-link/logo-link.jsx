import {Link} from "react-router-dom";
import RoutePath from "../../routes";

const LogoLink = (props) => {
  const {isMain, className} = props;
  const logo = <>
    <span className="logo__letter logo__letter--1">W</span>
    <span className="logo__letter logo__letter--2">T</span>
    <span className="logo__letter logo__letter--3">W</span>
  </>;

  return (
    isMain
      ? <a className={className || ``}>{logo}</a>
      : <Link to={!isMain && RoutePath.INDEX} className={className || ``}>{logo}</Link>
  );
};

LogoLink.propTypes = {
  isMain: PropTypes.bool,
  className: PropTypes.string,
};

export default LogoLink;
