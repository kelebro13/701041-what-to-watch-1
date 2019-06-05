import {shallow} from 'enzyme';
import UserBlock from "./user-block";

describe(`UserBlock`, () => {
  it(`should render avatar if user authorization`, () => {
    const user = {
      id: 1,
      email: `Oliver.conner@gmail.com`,
      name: `Oliver.conner`,
      avatarUrl: `img/1.png`
    };

    const wrapper = shallow(<UserBlock user={user}/>);
    expect(wrapper.find(`img`).length).toEqual(1);
    expect(wrapper.find(`.user-block__link`).length).toEqual(0);
  });

  it(`should render link "sing in" if user require authorization`, () => {
    const wrapper = shallow(<UserBlock/>);
    expect(wrapper.find(`img`).length).toEqual(0);
    expect(wrapper.find(`.user-block__link`).length).toEqual(1);
  });
});

