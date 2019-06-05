import {mount} from 'enzyme';
import SingInForm from './sing-in-form';

describe(`SingInForm form filling`, () => {
  it(`should call singIn when submit form (all field are filling correct)`, () => {
    const singInRequest = jest.fn(() => Promise.resolve());

    const wrapper = mount(<SingInForm singInRequest={singInRequest}/>);

    const email = `Oliver.conner@gmail.com`;
    const password = `12345`;
    wrapper.instance().emailInputRef.current.value = email;
    wrapper.instance().passwordInputRef.current.value = password;
    wrapper.find(`#user-email`).simulate(`change`, {target: {value: email}});
    wrapper.find(`#user-password`).simulate(`change`, {target: {value: password}});
    wrapper.find(`form`).simulate(`submit`, {preventDefault: () => {}});

    expect(singInRequest).toHaveBeenCalledTimes(1);
    expect(singInRequest).toHaveBeenCalledWith(email, password);
  });

  it(`should't call singIn when submit form if password not fill`, () => {
    const singIn = jest.fn(() => Promise.resolve());

    const wrapper = mount(<SingInForm singInRequest={singIn}/>);

    const email = `Oliver.conner@gmail.com`;
    wrapper.instance().emailInputRef.current.value = email;
    wrapper.find(`#user-email`).simulate(`change`, {target: {value: email}});
    wrapper.find(`form`).simulate(`submit`, {preventDefault: () => {}});

    expect(singIn).toHaveBeenCalledTimes(0);
  });

  it(`should't call singIn when submit form if email not fill`, () => {
    const singIn = jest.fn(() => Promise.resolve());

    const wrapper = mount(<SingInForm singInRequest={singIn}/>);

    const password = `12345`;
    wrapper.instance().passwordInputRef.current.value = password;
    wrapper.find(`#user-password`).simulate(`change`, {target: {value: password}});
    wrapper.find(`form`).simulate(`submit`, {preventDefault: () => {}});

    expect(singIn).toHaveBeenCalledTimes(0);
  });
});
