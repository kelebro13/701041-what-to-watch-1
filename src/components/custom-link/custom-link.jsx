const CustomLink = (props) => {
  const {id, className, title, onClick, ...rest} = props;

  const _handleLinkClick = (evt) => {
    evt.preventDefault();
    onClick(title);
  };

  return <a id={id} className={className} onClick={_handleLinkClick} {...rest}>{title}</a>;
};

CustomLink.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CustomLink;
