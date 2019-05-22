const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeItem: -1
      };
      this.handleActiveItemChange = this.handleActiveItemChange.bind(this);
    }

    handleActiveItemChange(id = -1) {
      this.setState((prevState) => ({
        activeItem: prevState.activeItem !== id ? id : -1
      }));
    }

    render() {
      return (
        <Component {...this.props} activeItem={this.state.activeItem} onActiveItemChange={this.handleActiveItemChange}/>
      );
    }
  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;
