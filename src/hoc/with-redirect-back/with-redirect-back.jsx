import {compose} from 'recompose';
import {withRouter} from 'react-router-dom';

const withRedirectBack = (Component) => {
  class WithRedirectBack extends React.PureComponent {
    constructor(props) {
      super(props);
      this.redirect = this.redirect.bind(this);
    }

    redirect() {
      const {location, history} = this.props;
      if (!location.state === false) {
        history.push(location.state.from.pathname);
      } else {
        history.goBack();
      }
    }

    render() {
      return <Component {...this.props} redirect={this.redirect}/>;
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
