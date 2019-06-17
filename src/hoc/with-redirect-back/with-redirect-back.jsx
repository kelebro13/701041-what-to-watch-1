import {compose} from 'recompose';
import {withRouter} from 'react-router-dom';

const withRedirectBack = (Component) => {
  class WithRedirectBack extends React.PureComponent {
    constructor(props) {
      super(props);
      this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleRedirect() {
      const {location, history} = this.props;
      if (!location.state === false) {
        history.push(location.state.from.pathname);
      } else {
        history.goBack();
      }
    }

    render() {
      return <Component {...this.props} onRedirect={this.handleRedirect}/>;
    }
  }

  WithRedirectBack.propTypes = {
    location: PropTypes.object,
    history: PropTypes.object
  };

  return WithRedirectBack;
};

export {withRedirectBack};
export default compose(withRouter, withRedirectBack);
