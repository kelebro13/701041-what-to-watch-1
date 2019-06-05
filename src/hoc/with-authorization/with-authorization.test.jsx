import {withAuthorization} from './with-authorization';
import {shallow} from "enzyme";
import RoutePath from "../../routes";

const MockComponent = () => <div id='test'/>;
const MockComponentWrapped = withAuthorization(MockComponent);

it(`should call history.push if required authorization`, () => {
  const history = {
    location: {
      pathname: `/test`
    },
    push: jest.fn()
  };
  shallow(<MockComponentWrapped isAuthorizationRequired={true} history={history}/>);

  expect(history.push).toHaveBeenCalledTimes(1);
  expect(history.push).toHaveBeenCalledWith(RoutePath.LOGIN, {from: {pathname: `/test`}});
});

it(`should render MockComponent if required authorization`, () => {
  const history = {
    location: {
      pathname: `/test`
    },
    push: jest.fn()
  };

  const wrapper = shallow(<MockComponentWrapped isAuthorizationRequired={false} history={history}/>);

  expect(history.push).toHaveBeenCalledTimes(0);
  expect(wrapper.find(MockComponent)).toHaveLength(1);
});
