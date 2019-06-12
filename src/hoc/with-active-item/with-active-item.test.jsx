import withActiveItem from "./with-active-item";
import {shallow} from "enzyme";

const MockComponent = () => <div/>;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`should change isPlaying when call switchPlayer`, () => {
  const wrapper = shallow(<MockComponentWrapped/>);

  expect(wrapper.props().isActive).toEqual(false);

  wrapper.props().onActiveStatusChange();
  expect(wrapper.props().isActive).toEqual(true);

  wrapper.props().onActiveStatusChange();
  expect(wrapper.props().isActive).toEqual(false);
});
