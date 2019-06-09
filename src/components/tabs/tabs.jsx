import withSelectItem from "../../hoc/with-select-item/with-select-item";
import Tab from './tab/tab';

const Tabs = (props) => {
  const {selectedItem, onSelectedItemChange, items} = props;
  const children = React.Children.toArray(props.children);

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {items.map((item, index) => {
            return <Tab key={index} title={item} index={index} isSelected={index === selectedItem} onSelect={onSelectedItemChange}/>;
          })}
        </ul>
      </nav>

      {children[selectedItem]}
    </div>
  );
};

Tabs.propTypes = {
  selectedItem: PropTypes.number.isRequired,
  onSelectedItemChange: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

export default withSelectItem(Tabs);
