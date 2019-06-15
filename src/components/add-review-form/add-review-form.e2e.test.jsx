import {shallow} from "enzyme";
import AddReviewForm from "./add-review-form";

it(`should call _handleFormSubmit and redirect`, () => {
  const addReviewRequest = jest.fn().mockResolvedValue(`default`);
  const form = shallow(<AddReviewForm addReviewRequest={addReviewRequest} filmId={1}/>);

  form.find(`Form`).simulate(`submit`, {get: () => {}});
  expect(addReviewRequest).toHaveBeenCalledTimes(1);
});
