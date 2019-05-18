const CustomLink = (props) => {
  const {title, onLinkClick} = props;

  const _handleLinkClick = (evt) => {
    evt.preventDefault();
    onLinkClick(title);
  };

  return <a href="#" className="catalog__genres-link" onClick={_handleLinkClick}>{title}</a>;
};

CustomLink.propTypes = {
  title: PropTypes.string.isRequired,
  onLinkClick: PropTypes.func.isRequired
};

export default CustomLink;
