import {Link} from "react-router-dom";
import RoutePath from "../../routes";
import withRedirectBack from '../../hoc/with-redirect-back/with-redirect-back';
import SingInForm from "../sing-in-form/sing-in-form.connection";
import InjectSvg from "../inject-svg/inject-svg";
import Header from "../header/header.connect";

const SingInFormWrapped = withRedirectBack(SingInForm);

const SingInPage = () => {
  return (
      <>
        <InjectSvg/>

        <div className="user-page">

          <Header className={`user-page__head`} hiddenUserProfile={true}>
            <h1 className="page-title user-page__title">Sign in</h1>
          </Header>

          <div className="sign-in user-page__content">
            <SingInFormWrapped />
          </div>

          <footer className="page-footer">
            <div className="logo">
              <Link to={RoutePath.INDEX} className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </>
  );
};

export default SingInPage;
