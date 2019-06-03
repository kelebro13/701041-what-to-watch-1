import {mount} from 'enzyme';
import SingIn from './sing-in';

describe(`SingIn form filling`, () => {
  it(`should call singIn when submit form (all field are filling correct)`, () => {
    const singIn = jest.fn();

    const wrapper = mount(<SingIn singIn={singIn}/>);

    const email = `Oliver.conner@gmail.com`;
    const password = `12345`;
    wrapper.instance().emailInputRef.current.value = email;
    wrapper.instance().passwordInputRef.current.value = password;
    wrapper.find(`#user-email`).simulate(`change`, {target: {value: email}});
    wrapper.find(`#user-password`).simulate(`change`, {target: {value: password}});
    wrapper.find(`form`).simulate(`submit`, {preventDefault: () => {}});

    expect(singIn).toHaveBeenCalledTimes(1);
    expect(singIn).toHaveBeenCalledWith(email, password);
  });

  it(`should't call singIn when submit form if password not fill`, () => {
    const singIn = jest.fn();

    const wrapper = mount(<SingIn singIn={singIn}/>);

    const email = `Oliver.conner@gmail.com`;
    wrapper.instance().emailInputRef.current.value = email;
    wrapper.find(`#user-email`).simulate(`change`, {target: {value: email}});
    wrapper.find(`form`).simulate(`submit`, {preventDefault: () => {}});

    expect(singIn).toHaveBeenCalledTimes(0);
  });

  it(`should't call singIn when submit form if email not fill`, () => {
    const singIn = jest.fn();

    const wrapper = mount(<SingIn singIn={singIn}/>);

    const password = `12345`;
    wrapper.instance().passwordInputRef.current.value = password;
    wrapper.find(`#user-password`).simulate(`change`, {target: {value: password}});
    wrapper.find(`form`).simulate(`submit`, {preventDefault: () => {}});

    expect(singIn).toHaveBeenCalledTimes(0);
  });
});
