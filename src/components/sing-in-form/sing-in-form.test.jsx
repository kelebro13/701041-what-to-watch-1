import renderer from "react-test-renderer";
import SingInForm from './sing-in-form';

it(`render correctly SingIn component`, () => {
  const wrapper = renderer
    .create(<SingInForm/>)
    .toJSON();

  expect(wrapper).toMatchSnapshot();
});
