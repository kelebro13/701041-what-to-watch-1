import {shallow} from "enzyme";
import CustomLink from "./custom-link";

it(`should return title when calling onLinkClick`, () => {
  const title = `Test`;
  const handleButtonClick = jest.fn();

  const customLink = shallow(<CustomLink title={title} onClick={handleButtonClick}/>);

  customLink.find(`a`).simulate(`click`, {preventDefault: () => {}});
  expect(handleButtonClick).toHaveBeenCalledTimes(1);
  expect(handleButtonClick).toBeCalledWith(title);
});
