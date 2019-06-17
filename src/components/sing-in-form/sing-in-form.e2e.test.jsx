import {shallow} from "enzyme";
import SingInForm from "./sing-in-form";

it(`should call _handleFormSubmit and redirect`, () => {
  const handleRedirect = jest.fn();
  const singInRequest = jest.fn().mockResolvedValue(`default`);
  const form = shallow(<SingInForm singInRequest={singInRequest} onRedirect={handleRedirect}/>);

  const submit = form.find(`Form`).simulate(`submit`, {get: () => {}});

  return Promise.resolve(submit).then(() => {
    expect(singInRequest).toHaveBeenCalledTimes(1);
    expect(handleRedirect).toHaveBeenCalledTimes(1);
  });
});
