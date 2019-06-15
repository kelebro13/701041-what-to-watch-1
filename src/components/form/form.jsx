import React from "react";

class Form extends React.PureComponent {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  render() {
    const {className, children} = this.props;
    return (
      <form ref={this.formRef} action="#" className={className} onSubmit={this._handleFormSubmit}>
        {children}
      </form>
    );
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    const {onSubmit} = this.props;
    const {current: form} = this.formRef;
    if (onSubmit) {
      const data = new FormData(form);
      onSubmit(data);
    }
  }
}

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  onSubmit: PropTypes.func
};

export default Form;
