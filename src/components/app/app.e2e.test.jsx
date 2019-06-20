import {shallow} from "enzyme";
import App from "./app";

it(`should call loadUserRequest when component mount`, () => {
  const loadUserRequest = jest.fn();
  shallow(<App loadUserRequest={loadUserRequest}/>);

  expect(loadUserRequest).toHaveBeenCalledTimes(1);
});
