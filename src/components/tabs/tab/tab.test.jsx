import renderer from "react-test-renderer";
import Tab from "./tab";

it(`renders property for selected`, () => {
  const wrapper = renderer
    .create(<Tab index={1} title={`Test`} isSelected={true}/>)
    .toJSON();

  expect(wrapper).toMatchSnapshot();
});

it(`renders property for not selected`, () => {
  const wrapper = renderer
    .create(<Tab index={1} title={`Test`} isSelected={false}/>)
    .toJSON();

  expect(wrapper).toMatchSnapshot();
});
