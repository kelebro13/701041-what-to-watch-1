import {compose} from 'recompose';
import {withRouter} from 'react-router-dom';
import RoutePath from "../../routes";

const withRedirectBack = (Component) => {
  class WithRedirectBack extends React.PureComponent {
    constructor(props) {
      super(props);
      this.redirect = this.redirect.bind(this);
    }

    redirect() {
      const {location, history} = this.props;
      let pathname = RoutePath.INDEX;
      if (!location.state === false) {
        pathname = location.state.from.pathname;
      }
      history.push(pathname);
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
