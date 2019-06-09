import {shallow} from "enzyme";
import withSelectItem from "./with-select-item";

const MockComponent = () => <div />;
const MockComponentWrapped = withSelectItem(MockComponent);

it(`should change activeItem when call onActiveItemChange`, () => {
  const wrapper = shallow(<MockComponentWrapped/>);

  expect(wrapper.props().selectedItem).toEqual(0);

  wrapper.props().onSelectedItemChange(1);
  expect(wrapper.props().selectedItem).toEqual(1);

  wrapper.props().onSelectedItemChange(2);
  expect(wrapper.props().selectedItem).toEqual(2);
});
