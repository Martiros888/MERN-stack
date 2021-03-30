import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './components/redux/store/store';
import { BrowserRouter as Router } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './App';

//const store=createStore(rootReducer)
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunkMiddleware)));

ReactDOM.render(
    <React.StrictMode>
        <Provider  store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);


