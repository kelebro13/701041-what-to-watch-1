import renderer from "react-test-renderer";
import Form from "./form";

it(`renders properly`, () => {

  const tree = renderer
    .create(<Form />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
