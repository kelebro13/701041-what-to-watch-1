const Tab = (props) => {
  const {index, title, onSelect, isSelected} = props;
  const handleClick = (evt) => {
    evt.preventDefault();
    if (onSelect) {
      onSelect(index);
    }
  };
  return <li className={`movie-nav__item ${isSelected ? `movie-nav__item--active` : ``}`} key={index}>
    <a href="#" className="movie-nav__link" onClick={handleClick}>{title}</a>
  </li>;
};

Tab.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func,
};

export default Tab;
