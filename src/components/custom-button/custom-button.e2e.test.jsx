import {shallow} from "enzyme";
import CustomButton from "./custom-button";

it(`should return title when calling onLinkClick`, () => {
  const title = `Test`;
  const handleButtonClick = jest.fn();

  const customLink = shallow(<CustomButton title={title} onClick={handleButtonClick}/>);

  customLink.find(`button`).simulate(`click`, {preventDefault: () => {}});
  expect(handleButtonClick).toHaveBeenCalledTimes(1);
  expect(handleButtonClick).toBeCalledWith(title);
});
