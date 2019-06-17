import {shallow} from "enzyme";
import withTimelineVideo from "./with-timeline-video";

const MockComponent = () => <div/>;
const MockComponentWrapped = withTimelineVideo(MockComponent);

it(`should change duration with call onDurationChange`, () => {
  const wrapper = shallow(<MockComponentWrapped/>);

  expect(wrapper.props().duration).toEqual(`00:00:00`);
  wrapper.props().onDurationChange(12);

  expect(wrapper.props().duration).toEqual(`00:00:12`);
});

it(`should not change progress with call onProgressChange if duration is zero`, () => {
  const wrapper = shallow(<MockComponentWrapped/>);

  expect(wrapper.props().progress).toEqual(0);
  wrapper.props().onProgressChange(6);
  expect(wrapper.props().progress).toEqual(0);
});

it(`should change progress with call onProgressChange`, () => {
  const wrapper = shallow(<MockComponentWrapped/>);

  expect(wrapper.props().progress).toEqual(0);
  wrapper.props().onDurationChange(12);
  wrapper.props().onProgressChange(6);
  expect(wrapper.props().progress).toEqual(50);
});

