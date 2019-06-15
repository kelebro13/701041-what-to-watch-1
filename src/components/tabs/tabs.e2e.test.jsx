import {mount} from "enzyme";
import Tabs from "./tabs";

it(`should render correct tab`, () => {
  const wrapper = mount(<Tabs items={[`1`, `2`]}>
    <span id={`1`}/>
    <span id={`2`}/>
  </Tabs>);

  expect(wrapper.find(`span[id='1']`)).toHaveLength(1);
  expect(wrapper.find(`span[id='2']`)).toHaveLength(0);

  wrapper.find(`a`).at(1).simulate(`click`);

  expect(wrapper.find(`span[id='1']`)).toHaveLength(0);
  expect(wrapper.find(`span[id='2']`)).toHaveLength(1);
});
