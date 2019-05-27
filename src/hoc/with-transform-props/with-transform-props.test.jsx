import {shallow} from "enzyme";
import withTransformProps from "./with-transform-props";

const MockComponent = () => <div />;

it(`should add new property`, () => {
  const testProperty = `test`;
  const MockComponentWrapper = withTransformProps((props) => {
    return {
      ...props,
      testProperty
    };
  })(MockComponent);

  const wrapper = shallow(<MockComponentWrapper/>);
  expect(wrapper.props().testProperty).toEqual(testProperty);
});
