import renderer from "react-test-renderer";
import MovieReviews from "./movie-reviews";

it(`renders property`, () => {
  const reviews = [
    {
      id: 1,
      user: {
        id: 4,
        name: `Kate Muir`,
      },
      rating: 8.9,
      comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      date: `2019-05-08T14:13:56.569Z`
    }
  ];

  const tree = renderer
    .create(<MovieReviews filmId={1} reviews={reviews}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
