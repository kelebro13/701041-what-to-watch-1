import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createBrowserHistory} from "history";
import {Router} from "react-router-dom";
import {composeWithDevTools} from "redux-devtools-extension";
import App from "./components/app/app";
import reducer from "./reducer";
import configureAPI from "./api/api";

const history = createBrowserHistory();

const api = configureAPI(history);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    ));

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App/>
      </Router>
    </Provider>,
    document.getElementById(`root`)
);
