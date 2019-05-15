import renderer from "react-test-renderer";
import VideoPlayer from './video-player';

it(`render correctly MovieList component`, () => {
  const poster = `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`;
  const sourceMp4 = `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`;
  const sourceWebm = `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`;

  const tree = renderer
    .create(<VideoPlayer poster={poster} sourceMp4={sourceMp4} sourceWebm={sourceWebm}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
