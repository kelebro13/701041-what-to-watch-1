class SingInForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.emailInputRef = React.createRef();
    this.passwordInputRef = React.createRef();

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._redirect = this._redirect.bind(this);
  }

  render() {
    return (
      <form ref={this.formRef} action="#" className="sign-in__form" onSubmit={this._handleFormSubmit}>
        <div className="sign-in__fields">
          <div className="sign-in__field">
            <input ref={this.emailInputRef} className="sign-in__input" type="email" placeholder="Email address"
              name="user-email"
              id="user-email" required={true}/>
            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>
          <div className="sign-in__field">
            <input ref={this.passwordInputRef} className="sign-in__input" type="password" placeholder="Password"
              name="user-password"
              id="user-password" required={true}/>
            <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
          </div>
        </div>
        <div className="sign-in__submit">
          <button className="sign-in__btn" type="submit">Sign in</button>
        </div>
      </form>
    );
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    const {singInRequest} = this.props;
    // checkValidity пришлось добавить только чтобы правильно работали jest тесты
    if (singInRequest && this.formRef.current.checkValidity()) {
      singInRequest(
          this.emailInputRef.current.value,
          this.passwordInputRef.current.value)
        .then(() => {
          this._redirect();
        });
    }
  }
  _redirect() {
    const {redirect} = this.props;
    if (redirect) {
      redirect();
    }
  }
}

SingInForm.propTypes = {
  singInRequest: PropTypes.func,
  redirect: PropTypes.func
};

export default SingInForm;
