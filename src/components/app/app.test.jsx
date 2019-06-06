import renderer from "react-test-renderer";
import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import RoutePath from "../../routes";
import SingIn from "../sing-in/sing-in";
import MyList from "../my-list/my-list";
import MainPage from "../main-page/main-page";
import {mockStore, store} from '../../test/test-utils';
import App from "./app";

describe(`App`, () => {
  it(`renders properly`, () => {
    const tree = renderer
      .create(
          <Provider store={mockStore(store)}>
            <MemoryRouter>
              <App isAuthorizationRequired={false}/>
            </MemoryRouter>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render App if path '/'`, () => {
    const tree = mount(
        <Provider store={mockStore(store)}>
          <MemoryRouter initialEntries={[RoutePath.INDEX]}>
            <App/>
          </MemoryRouter>
        </Provider>
    );

    expect(tree.find(MainPage)).toHaveLength(1);
  });

  it(`should render SingIn if path '/login'`, () => {
    const tree = mount(
        <Provider store={mockStore(store)}>
          <MemoryRouter initialEntries={[RoutePath.LOGIN]}>
            <App/>
          </MemoryRouter>
        </Provider>
    );

    expect(tree.find(SingIn)).toHaveLength(1);
  });

  it(`should render MyList if path '/mylist'`, () => {
    const tree = mount(
        <Provider store={mockStore(store)}>
          <MemoryRouter initialEntries={[RoutePath.MY_LIST]}>
            <App/>
          </MemoryRouter>
        </Provider>
    );

    expect(tree.find(MyList)).toHaveLength(1);
  });
});
