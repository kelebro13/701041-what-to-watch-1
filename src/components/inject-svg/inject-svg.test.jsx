import renderer from "react-test-renderer";
import InjectSvg from "./inject-svg";

it(`renders properly`, () => {

  const tree = renderer
    .create(<InjectSvg/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
