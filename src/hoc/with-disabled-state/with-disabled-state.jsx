const withDisabledState = (Component) => {
  class WithDisabledState extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isDisabled: false
      };
      this.handleDisabledStateChange = this.handleDisabledStateChange.bind(this);
    }

    handleDisabledStateChange() {
      this.setState((prevState) => ({
        isDisabled: !prevState.isDisabled
      }));
    }

    render() {
      return (
        <Component {...this.props} isDisabled={this.state.isDisabled} onDisabledStateChange={this.handleDisabledStateChange}/>
      );
    }
  }

  WithDisabledState.propTypes = {};

  return WithDisabledState;
};

export default withDisabledState;
