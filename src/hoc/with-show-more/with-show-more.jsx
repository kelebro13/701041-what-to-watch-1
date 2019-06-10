const withShowMore = (Component) => {
  class WithShowMore extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        countItem: props.initCount
      };
      this.changeCountItem = this.changeCountItem.bind(this);
    }

    changeCountItem() {
      this.setState((prevState) => ({
        countItem: prevState.countItem + this.props.stepCount
      }));
    }

    render() {
      return (
        <Component
          {...this.props}
          countItem={this.state.countItem}
          changeCountItem={this.changeCountItem}/>
      );
    }
  }

  WithShowMore.propTypes = {
    initCount: PropTypes.number.isRequired,
    stepCount: PropTypes.number.isRequired
  };

  return WithShowMore;
};

export default withShowMore;
