import renderer from "react-test-renderer";
import withVideo from "./with-video";

const MockComponent = (props) => <div>{props.onVideoRender()}</div>;
MockComponent.propTypes = {
  onVideoRender: PropTypes.func
};

const MockComponentWrapper = withVideo(MockComponent);

it(`render correctly withVideo hoc`, () => {
  const film = {
    previewImage: `img/the-grand-budapest-hotel.jpg`,
    previewVideoLink: `https://some-link`
  };

  const tree = renderer
    .create(<MockComponentWrapper isPlaying={false} film={film}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
