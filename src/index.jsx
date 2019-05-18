import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from './components/app/app';
import films from './mocks/films';
import {reducer, initialState} from "./reducer";

const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
      <App films={films}/>
    </Provider>,
    document.getElementById(`root`)
);
