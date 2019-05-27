const withTransformProps = (transformFunction) => (Component) => {
  const WithTransformProps = (props) => {
    const newProps = transformFunction(props);
    return <Component {...newProps}/>;
  };

  return WithTransformProps;
};

export default withTransformProps;
