import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import App from './components/app/app.connect';
import {reducer} from "./reducer/reducer";
import configureAPI from './api';

const api = configureAPI((...args) => store.dispatch(...args));

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    ));

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById(`root`)
);
