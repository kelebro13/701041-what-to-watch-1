import {shallow} from "enzyme";
import Tab from "./tab";

it(`should call onSelect on click`, () => {
  const onSelect = jest.fn();
  const tab = shallow(<Tab title={`test`} index={1} isSelected={true} onSelect={onSelect}/>);
  tab.find(`a`).simulate(`click`, {preventDefault: () => {}});
  expect(onSelect).toHaveBeenCalledTimes(1);
});
