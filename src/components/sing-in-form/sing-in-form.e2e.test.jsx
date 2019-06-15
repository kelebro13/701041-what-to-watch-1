import {shallow} from "enzyme";
import SingInForm from "./sing-in-form";

it(`should call _handleFormSubmit and redirect`, () => {
  const redirect = jest.fn();
  const singInRequest = jest.fn().mockResolvedValue(`default`);
  const form = shallow(<SingInForm singInRequest={singInRequest} redirect={redirect}/>);

  const submit = form.find(`Form`).simulate(`submit`, {get: () => {}});

  return Promise.resolve(submit).then(() => {
    expect(singInRequest).toHaveBeenCalledTimes(1);
    expect(redirect).toHaveBeenCalledTimes(1);
  });
});
