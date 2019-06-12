import renderer from "react-test-renderer";
import VideoPlayer from './video-player';

it(`renders properly`, () => {
  const poster = `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`;
  const sourceMp4 = `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`;

  const tree = renderer
    .create(<VideoPlayer name={``} poster={poster} videoLink={sourceMp4}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
