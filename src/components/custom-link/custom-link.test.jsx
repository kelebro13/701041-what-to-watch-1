import renderer from "react-test-renderer";
import CustomLink from './custom-link';

it(`render correctly CustomLink componen`, () => {
  const id = `test_button`;
  const className = `test_class`;
  const title = `Test`;
  const handleButtonClick = () => {};

  const tree = renderer
    .create(<CustomLink id={id} className={className} title={title} onClick={handleButtonClick}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
