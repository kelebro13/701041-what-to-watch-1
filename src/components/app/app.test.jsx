import renderer from "react-test-renderer";
import {mount} from "enzyme";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {mockStore, store} from "../../test/mock";
import RoutePath from "../../routes";
import SingInPage from "../sing-in-page/sing-in-page";
import MyListPage from "../my-list-page/my-list-page";
import MainPage from "../main-page/main-page";
import MoviePage from "../movie-page/movie-page";
import App from "./app";
import AddReviewPage from "../add-review-page/add-review-page";

describe(`App`, () => {
  it(`"`, () => {
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

    expect(tree.find(SingInPage)).toHaveLength(1);
  });

  it(`should render MyList if path '/mylist'`, () => {
    const tree = mount(
        <Provider store={mockStore(store)}>
          <MemoryRouter initialEntries={[RoutePath.MY_LIST]}>
            <App/>
          </MemoryRouter>
        </Provider>
    );

    expect(tree.find(MyListPage)).toHaveLength(1);
  });

  it(`should render MoviePage if path '/film/:id'`, () => {
    const tree = mount(
        <Provider store={mockStore(store)}>
          <MemoryRouter initialEntries={[`${RoutePath.FILM}/2`]}>
            <App/>
          </MemoryRouter>
        </Provider>
    );

    expect(tree.find(MoviePage)).toHaveLength(1);
  });

  it(`should render AddReviewPage if path 'film/2/review'`, () => {
    const tree = mount(
        <Provider store={mockStore(store)}>
          <MemoryRouter initialEntries={[`${RoutePath.FILM}/2${RoutePath.ADD_REVIEW}`]}>
            <App/>
          </MemoryRouter>
        </Provider>
    );

    expect(tree.find(AddReviewPage)).toHaveLength(1);
  });
});
