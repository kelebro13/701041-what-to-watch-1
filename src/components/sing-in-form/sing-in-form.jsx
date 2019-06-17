import Form from "../form/form";

const USER_EMAIL_INPUT = `user-email`;
const USER_PASSWORD_INPUT = `user-password`;

const SingInForm = (props) => {

  const _handleFormSubmit = (formData) => {
    const {singInRequest} = props;
    if (singInRequest) {
      singInRequest(
          formData.get(USER_EMAIL_INPUT),
          formData.get(USER_PASSWORD_INPUT))
        .then(() => {
          _redirect();
        });
    }
  };

  const _redirect = () => {
    const {onRedirect} = props;
    if (onRedirect) {
      onRedirect();
    }
  };

  return (
    <Form className={`sign-in__form`} onSubmit={_handleFormSubmit}>
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input className="sign-in__input" type="email" placeholder="Email address"
            name={USER_EMAIL_INPUT}
            id={USER_EMAIL_INPUT} required={true}/>
          <label className="sign-in__label visually-hidden" htmlFor={USER_EMAIL_INPUT}>Email address</label>
        </div>
        <div className="sign-in__field">
          <input className="sign-in__input" type="password" placeholder="Password"
            name={USER_PASSWORD_INPUT}
            id={USER_PASSWORD_INPUT} required={true}/>
          <label className="sign-in__label visually-hidden" htmlFor={USER_PASSWORD_INPUT}>Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit">Sign in</button>
      </div>
    </Form>
  );
};

SingInForm.propTypes = {
  singInRequest: PropTypes.func,
  onRedirect: PropTypes.func
};

export default SingInForm;
