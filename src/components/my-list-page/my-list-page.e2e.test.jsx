import {shallow} from "enzyme";
import MyListPage from "./my-list-page";

it(`should call loadFavoriteFilmsRequest if favorite films is null`, () => {
  const loadFavoriteFilmsRequest = jest.fn();
  shallow(<MyListPage films={null} loadFavoriteFilmsRequest={loadFavoriteFilmsRequest}/>);

  expect(loadFavoriteFilmsRequest).toHaveBeenCalledTimes(1);
});
