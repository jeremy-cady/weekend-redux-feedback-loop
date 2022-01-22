import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const feelingsReducer = (state = '', action) => {
    switch(action.type) {
        case 'SET_FEELINGS_INFO':
            return action.payload
        default:
    }
    return state;
}; 


const understandingReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_UNDERSTANDING_INFO':
            return action.payload
        default:
    }
    return state
};


const supportReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_SUPPORT_INFO':
            return action.payload
        default:
    }
    return state;
};


const commentsReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_COMMENTS_INFO':
            return action.payload
        default:
    }
    return state;
};


const storeInstance = createStore(
    combineReducers({
        feelingsReducer,
        understandingReducer,
        supportReducer,
        commentsReducer
    }),
    applyMiddleware(logger)
);


ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
