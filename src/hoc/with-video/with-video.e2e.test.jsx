import {mount} from "enzyme";
import withVideo from "./with-video";

const MockComponent = () => <div/>;
const MockComponentWrapped = withVideo(MockComponent);

it(`should play video if not play`, () => {
  const videoRef = {
    play: jest.fn(),
    pause: jest.fn(),
    load: jest.fn()
  };
  const wrapper = mount(<MockComponentWrapped isPlaying={false}/>);
  wrapper.instance().videoRef.current = videoRef;
  wrapper.setProps({isPlaying: true});

  expect(videoRef.play).toHaveBeenCalledTimes(1);
  expect(videoRef.pause).toHaveBeenCalledTimes(0);
  expect(videoRef.load).toHaveBeenCalledTimes(0);
});

it(`should pause video if play`, () => {
  const videoRef = {
    play: jest.fn(),
    pause: jest.fn(),
    load: jest.fn()
  };
  const wrapper = mount(<MockComponentWrapped isPlaying={true}/>);
  wrapper.instance().videoRef.current = videoRef;
  wrapper.setProps({isPlaying: false});

  expect(videoRef.play).toHaveBeenCalledTimes(0);
  expect(videoRef.pause).toHaveBeenCalledTimes(1);
  expect(videoRef.load).toHaveBeenCalledTimes(1);
});
