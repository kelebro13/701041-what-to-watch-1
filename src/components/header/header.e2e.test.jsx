import {shallow} from 'enzyme';
import Header from "./header";
import UserProfile from "../user-profile/user-profile";

it(`should correct render`, () => {
  const wrapper = shallow(<Header isIndexPage={false} className={`test-selector`} renderTitle={() => <h1>Test</h1>}/>);

  expect(wrapper.find(`header.test-selector`).length).toEqual(1);
  expect(wrapper.find(`h1`).length).toEqual(1);
  expect(wrapper.find(UserProfile).length).toEqual(1);
});

it(`should hidden UserBlock if need`, () => {
  const wrapper = shallow(
      <Header isIndexPage={false} className={`test-selector`} renderTitle={() => <h1>Test</h1>} hiddenUserBlock={true}/>);

  expect(wrapper.find(`header.test-selector`).length).toEqual(1);
  expect(wrapper.find(`h1`).length).toEqual(1);
  expect(wrapper.find(UserProfile).length).toEqual(0);
});
