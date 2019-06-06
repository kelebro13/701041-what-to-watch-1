import LogoLink from "../logo-link/logo-link";

const Footer = (props) => {
  const {isMain} = props;
  return (
    <footer className="page-footer">
      <div className="logo">
        <LogoLink className={`logo__link logo__link--light`} isMain={isMain}/>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  isMain: PropTypes.bool,
  className: PropTypes.string
};

export default Footer;
