import renderer from "react-test-renderer";
import InjectSvg from "./inject-svg";

it(`renders properly`, () => {
  const wrapper = renderer
    .create(<InjectSvg/>)
    .toJSON();

  expect(wrapper).toMatchSnapshot();
});
