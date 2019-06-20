import {shallow} from "enzyme";
import withDisabledState from "./with-disabled-state";

const MockComponent = () => <div />;
const MockComponentWrapped = withDisabledState(MockComponent);

it(`should change isDisabled when call onDisabledStateChange`, () => {
  const wrapper = shallow(<MockComponentWrapped/>);

  expect(wrapper.props().isDisabled).toEqual(false);

  wrapper.props().onDisabledStateChange();
  expect(wrapper.props().isDisabled).toEqual(true);

  wrapper.props().onDisabledStateChange();
  expect(wrapper.props().isDisabled).toEqual(false);
});
