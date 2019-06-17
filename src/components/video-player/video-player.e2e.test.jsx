import {mount} from "enzyme";
import {VideoPlayer} from "./video-player";

it(`should open full screen if click on button`, () => {
  const video = {
    onloadeddata: null,
    ontimeupdate: null,
    play: jest.fn(),
    pause: jest.fn(),
    requestFullscreen: jest.fn()
  };

  const videoPlayer = mount(<VideoPlayer name={`Test`} poster={``}/>);
  videoPlayer.instance().videoRef.current = video;

  videoPlayer.find(`.player__full-screen`).simulate(`click`);
  expect(video.requestFullscreen).toHaveBeenCalledTimes(1);
});

it(`should stop video and call onExit if click exit button`, () => {
  const video = {
    onloadeddata: null,
    ontimeupdate: null,
    play: jest.fn(),
    pause: jest.fn(),
    requestFullscreen: jest.fn()
  };

  const onExit = jest.fn();

  const videoPlayer = mount(<VideoPlayer name={`Test`} poster={``} onExit={onExit}/>);
  videoPlayer.instance().videoRef.current = video;

  videoPlayer.find(`.player__exit`).simulate(`click`);
  expect(video.pause).toHaveBeenCalledTimes(1);
  expect(onExit).toHaveBeenCalledTimes(1);
});

it(`should play video if click play button`, () => {
  const video = {
    onloadeddata: null,
    ontimeupdate: null,
    play: jest.fn(),
    pause: jest.fn(),
    requestFullscreen: jest.fn()
  };

  const onExit = jest.fn();
  const onActiveStatusChange = jest.fn();

  const videoPlayer = mount(<VideoPlayer name={`Test`} poster={``} onExit={onExit} isActive={false} onActiveStatusChange={onActiveStatusChange}/>);
  videoPlayer.instance().videoRef.current = video;

  videoPlayer.find(`.player__play`).simulate(`click`);
  expect(video.play).toHaveBeenCalledTimes(1);
  expect(onActiveStatusChange).toHaveBeenCalledTimes(1);
});

it(`should stop video if click play button`, () => {
  const video = {
    onloadeddata: null,
    ontimeupdate: null,
    play: jest.fn(),
    pause: jest.fn(),
    requestFullscreen: jest.fn()
  };

  const onExit = jest.fn();
  const onActiveStatusChange = jest.fn();

  const videoPlayer = mount(<VideoPlayer name={`Test`} poster={``} onExit={onExit} isActive={true} onActiveStatusChange={onActiveStatusChange}/>);
  videoPlayer.instance().videoRef.current = video;

  videoPlayer.find(`.player__play`).simulate(`click`);
  expect(video.pause).toHaveBeenCalledTimes(1);
  expect(onActiveStatusChange).toHaveBeenCalledTimes(1);
});
