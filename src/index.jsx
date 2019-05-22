import ReactDOM from "react-dom";
import {createStore, compose} from "redux";
import {Provider} from "react-redux";
import App from './components/app/app.connect';
import films from './mocks/films';
import {reducer, initialState} from "./reducer";

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose);

ReactDOM.render(
    <Provider store={store}>
      <App films={films}/>
    </Provider>,
    document.getElementById(`root`)
);
