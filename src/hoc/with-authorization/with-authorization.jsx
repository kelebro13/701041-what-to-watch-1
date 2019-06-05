import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import {isAuthorizationRequiredSelector} from "../../reducer/user/selectors";
import RoutePath from "../../routes";

const withAuthorization = (Component) => {
  class WithAuthorization extends React.PureComponent {
    componentDidMount() {
      if (this.props.isAuthorizationRequired) {
        const location = {
          path: RoutePath.LOGIN,
          state: {
            from: {pathname: this.props.history.location.pathname}
          }
        };
        this.props.history.push(location.path, location.state);
      }
    }
    render() {
      return <Component {...this.props}/>;
    }
  }

  WithAuthorization.propTypes = {
    isAuthorizationRequired: PropTypes.bool,
    history: PropTypes.object
  };

  return WithAuthorization;
};

const mapStateToProps = (state) => {
  return {
    isAuthorizationRequired: isAuthorizationRequiredSelector(state)
  };
};

export {withAuthorization};
export default compose(connect(mapStateToProps), withRouter, withAuthorization);
