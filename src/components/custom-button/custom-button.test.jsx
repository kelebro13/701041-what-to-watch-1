import renderer from "react-test-renderer";
import CustomButton from './custom-button';

it(`render correctly CustomLink componen`, () => {
  const id = `test_button`;
  const className = `test_class`;
  const title = `Test`;
  const handleButtonClick = () => {};

  const tree = renderer
    .create(<CustomButton id={id} className={className} title={title} onClick={handleButtonClick}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
