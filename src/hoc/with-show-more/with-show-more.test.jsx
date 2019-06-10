import {shallow} from "enzyme";
import withShowMore from "./with-show-more";

const MockComponent = () => <div />;
const MockComponentWrapped = withShowMore(MockComponent);

it(`should change countItem when call changeCountItem`, () => {
  const wrapper = shallow(<MockComponentWrapped initCount={20} stepCount={20}/>);

  expect(wrapper.props().countItem).toEqual(20);

  wrapper.props().changeCountItem();
  expect(wrapper.props().countItem).toEqual(40);

  wrapper.props().changeCountItem();
  expect(wrapper.props().countItem).toEqual(60);
});
