const CustomButton = (props) => {
  const {id, className, title, onClick, ...rest} = props;

  const _handleLinkClick = (evt) => {
    evt.preventDefault();
    onClick(title);
  };

  return <button id={id} className={className} onClick={_handleLinkClick} {...rest}>{title}</button>;
};

CustomButton.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CustomButton;
