import {shallow} from 'enzyme';
import {Link} from "react-router-dom";
import LogoLink from "./logo-link";

it(`should render empty "a" if is index page`, () => {
  const wrapper = shallow(<LogoLink isMain={true}/>);

  expect(wrapper.find(`a`).length).toEqual(1);
  expect(wrapper.find(Link).length).toEqual(0);
});

it(`should render Link if is not index page`, () => {
  const wrapper = shallow(<LogoLink isMain={false}/>);

  expect(wrapper.find(`a`).length).toEqual(0);
  expect(wrapper.find(Link).length).toEqual(1);
});

