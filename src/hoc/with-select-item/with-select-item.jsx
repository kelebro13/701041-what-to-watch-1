const withSelectItem = (Component) => {
  class WithSelectItem extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        selectedItem: -1
      };
      this.handleSelectedItemChange = this.handleSelectedItemChange.bind(this);
    }

    handleSelectedItemChange(id = -1) {
      this.setState((prevState) => ({
        selectedItem: prevState.selectedItem !== id ? id : -1
      }));
    }

    render() {
      return (
        <Component {...this.props} selectedItem={this.state.selectedItem} onSelectedItemChange={this.handleSelectedItemChange}/>
      );
    }
  }

  WithSelectItem.propTypes = {};

  return WithSelectItem;
};

export default withSelectItem;
