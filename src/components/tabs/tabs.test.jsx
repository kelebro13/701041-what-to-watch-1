import renderer from "react-test-renderer";
import Tabs from "./tabs";

it(`renders properly`, () => {
  const wrapper = renderer
    .create(<Tabs items={[`test`]}><div>{`Test`}</div></Tabs>)
    .toJSON();

  expect(wrapper).toMatchSnapshot();
});
