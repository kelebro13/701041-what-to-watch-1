import {mount} from "enzyme";
import Form from "./form";

it(`should call onSubmit when submit form`, () => {
  const onSubmit = jest.fn(() => Promise.resolve());

  const wrapper = mount(<Form onSubmit={onSubmit}/>);

  wrapper.find(`form`).simulate(`submit`, {preventDefault: () => {}});

  expect(onSubmit).toHaveBeenCalledTimes(1);
});
