import {shallow} from "enzyme";
import CustomLink from "./custom-link";

it(`should return title when calling onLinkClick`, () => {
  const title = `Test`;
  const handleLinkClick = jest.fn();

  const customLink = shallow(<CustomLink title={title} onLinkClick={handleLinkClick}/>);

  customLink.find(`a`).simulate(`click`, {preventDefault: () => {}});
  expect(handleLinkClick).toHaveBeenCalledTimes(1);
  expect(handleLinkClick).toBeCalledWith(title);
});
