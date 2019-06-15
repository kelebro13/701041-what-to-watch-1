import LogoLink from "../logo-link/logo-link";

const Footer = (props) => {
  const {isIndexPage} = props;
  return (
    <footer className="page-footer">
      <div className="logo">
        <LogoLink className={`logo__link logo__link--light`} isMain={isIndexPage}/>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  isIndexPage: PropTypes.bool,
  className: PropTypes.string
};

export default Footer;
