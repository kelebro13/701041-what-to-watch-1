import renderer from "react-test-renderer";
import Review from "./review";

it(`renders property`, () => {
  const review = {
    id: 1,
    user: {
      id: 4,
      name: `Kate Muir`,
    },
    rating: 8.9,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    date: `2019-05-08T14:13:56.569Z`
  };

  const tree = renderer
    .create(<Review review={review}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
