import {shallow} from "enzyme";
import AddReviewForm from "./add-review-form";

it(`should call _handleFormSubmit and redirect`, () => {
  const onDisabledStateChange = jest.fn();
  const addReviewRequest = jest.fn().mockResolvedValue(`default`);
  const form = shallow(<AddReviewForm addReviewRequest={addReviewRequest} filmId={1} onDisabledStateChange={onDisabledStateChange}/>);

  form.find(`Form`).simulate(`submit`, {get: () => {}});
  expect(addReviewRequest).toHaveBeenCalledTimes(1);
  expect(onDisabledStateChange).toHaveBeenCalledTimes(1);
});

it(`should call onDisabledStateChange twice if addReviewRequest reject`, () => {
  const onDisabledStateChange = jest.fn();
  const addReviewRequest = jest.fn().mockRejectedValue(`default`);
  const form = shallow(<AddReviewForm addReviewRequest={addReviewRequest} filmId={1} onDisabledStateChange={onDisabledStateChange}/>);

  const submit = form.find(`Form`).simulate(`submit`, {get: () => {}});
  return Promise.resolve(submit).then(() => {
    expect(addReviewRequest).toHaveBeenCalledTimes(1);
  }).catch(() => {
    expect(onDisabledStateChange).toHaveBeenCalledTimes(2);
  });
});
