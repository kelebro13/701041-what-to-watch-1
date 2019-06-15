import withRedirectBack from '../../hoc/with-redirect-back/with-redirect-back';
import SingInForm from "../sing-in-form/sing-in-form.connection";
import InjectSvg from "../inject-svg/inject-svg";
import Header from "../header/header.connect";
import Footer from "../footer/footer";

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
          <SingInFormWrapped/>
        </div>

        <Footer isIndexPage={false}/>
      </div>
    </>
  );
};

export default SingInPage;
