import renderer from "react-test-renderer";
import SingIn from './sing-in';

it(`render correctly SingIn component`, () => {
  const wrapper = renderer
    .create(<SingIn/>)
    .toJSON();

  expect(wrapper).toMatchSnapshot();
});
