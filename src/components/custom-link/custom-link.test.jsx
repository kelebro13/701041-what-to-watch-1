import renderer from "react-test-renderer";
import CustomLink from './custom-link';

it(`render correctly CustomLink componen`, () => {

  const title = `Test`;
  const handleLinkClick = () => {};

  const tree = renderer
    .create(<CustomLink title={title} onLinkClick={handleLinkClick}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
