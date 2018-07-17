import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Actual application
import App from './App';

// configure redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './../src/reducers';

// Include bootstrap and theme in whole applications
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

// Configure logger and redux dev tools
const logger = createLogger();
const appStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>, 
    document.getElementById('root'));
