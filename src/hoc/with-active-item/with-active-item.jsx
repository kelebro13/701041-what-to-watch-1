const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isActive: false
      };
      this.handleActiveStatusChange = this.handleActiveStatusChange.bind(this);
    }

    handleActiveStatusChange(isActive) {
      this.setState((prevState) => ({
        isActive: isActive !== undefined ? isActive : !prevState.isActive
      }));
    }

    render() {
      const {isActive} = this.state;
      return (
        <Component
          {...this.props}
          isActive={isActive}
          onActiveStatusChange={this.handleActiveStatusChange}/>
      );
    }
  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;
