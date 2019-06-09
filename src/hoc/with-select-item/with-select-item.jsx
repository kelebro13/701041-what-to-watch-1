const withSelectItem = (Component) => {
  class WithSelectItem extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        selectedItem: 0
      };
      this.handleSelectedItemChange = this.handleSelectedItemChange.bind(this);
    }

    handleSelectedItemChange(id = 0) {
      if (this.state.selectedItem !== id) {
        this.setState({
          selectedItem: id
        });
      }
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
