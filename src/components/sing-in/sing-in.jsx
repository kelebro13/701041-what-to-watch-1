import SingInForm from "../sing-in-form/sing-in-form.connection";
import withRedirectBack from '../../hoc/with-redirect-back/with-redirect-back';
import Footer from "../footer/footer";
import Header from "../header/header.connect";
import InjectSvg from "../inject-svg/inject-svg";

const SingInFormWrapped = withRedirectBack(SingInForm);

const SingIn = () => {

  const renderTitle = () => <h1 className="page-title user-page__title">Sign in</h1>;

  return (
      <>
        <InjectSvg/>
        <div className="user-page">
          <Header className={`user-page__head`} hiddenUserBlock={true} renderTitle={renderTitle}/>
          <div className="sign-in user-page__content">
            <SingInFormWrapped />
          </div>
          <Footer/>
        </div>
      </>
  );
};

export default SingIn;
