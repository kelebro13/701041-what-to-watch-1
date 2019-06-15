import {shallow} from 'enzyme';
import UserProfile from "./user-profile";
import {user} from "../../test/mock";

describe(`UserBlock`, () => {
  it(`should render avatar if user authorization`, () => {

    const wrapper = shallow(<UserProfile user={user}/>);
    expect(wrapper.find(`img`).length).toEqual(1);
    expect(wrapper.find(`.user-block__link`).length).toEqual(0);
  });

  it(`should render link "sing in" if user require authorization`, () => {
    const wrapper = shallow(<UserProfile/>);
    expect(wrapper.find(`img`).length).toEqual(0);
    expect(wrapper.find(`.user-block__link`).length).toEqual(1);
  });
});
