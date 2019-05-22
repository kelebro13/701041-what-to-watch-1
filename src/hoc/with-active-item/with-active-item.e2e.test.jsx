import {shallow} from "enzyme";
import withActiveItem from "./with-active-item";

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`should change activeItem when call onActiveItemChange`, () => {
  const wrapper = shallow(<MockComponentWrapped/>);

  expect(wrapper.props().activeItem).toEqual(-1);

  wrapper.props().onActiveItemChange(1);
  expect(wrapper.props().activeItem).toEqual(1);

  wrapper.props().onActiveItemChange(2);
  expect(wrapper.props().activeItem).toEqual(2);

  wrapper.props().onActiveItemChange(2);
  expect(wrapper.props().activeItem).toEqual(-1);
});
