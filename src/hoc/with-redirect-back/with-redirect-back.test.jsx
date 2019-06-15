import {withRedirectBack} from './with-redirect-back';
import {shallow} from "enzyme";

const MockComponent = () => <div/>;
const MockComponentWrapped = withRedirectBack(MockComponent);

it(`should redirect back`, () => {

  const history = {
    goBack: jest.fn(),
    push: jest.fn()
  };

  const location = {
    state: {
      from: {
        pathname: `/test`
      }
    }
  };

  const wrapper = shallow(<MockComponentWrapped location={location} history={history}/>);
  wrapper.props().redirect();

  expect(history.goBack).toHaveBeenCalledTimes(0);
  expect(history.push).toHaveBeenCalledTimes(1);
  expect(history.push).toHaveBeenCalledWith(`/test`);
});


it(`should goBack if location empty`, () => {
  const history = {
    goBack: jest.fn(),
    push: jest.fn()
  };

  const location = {
    state: undefined
  };

  const wrapper = shallow(<MockComponentWrapped location={location} history={history}/>);
  wrapper.props().redirect();

  expect(history.goBack).toHaveBeenCalledTimes(1);
  expect(history.push).toHaveBeenCalledTimes(0);
});
