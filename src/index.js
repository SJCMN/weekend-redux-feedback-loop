import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers,  applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { Provider } from 'react-redux';

const feelingList = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: ''
}

const feelingTable = []

const allFeelings = (state = feelingTable, action) => {
    if (action.type === 'SET_FEELINGS'){
        return action.payload
    }
    return state;
}

const feelings = (state = feelingList, action ) => {
    if (action.type === 'ADD_FEELING'){
        return {...state, feeling:action.payload}; 
    } if (action.type === 'ADD_UNDERSTANDING'){
        return {...state, understanding:action.payload}
    } if (action.type === 'ADD_SUPPORT'){
        return {...state, support:action.payload}
    } if (action.type === 'ADD_COMMENT'){
        return {...state, comments:action.payload}
    } if (action.type === 'CLEAR_FEELINGS'){
        return feelingList 
    }
    return state;
}

const feelingStore = createStore(
    combineReducers({
        feelings,
        allFeelings
    }), 
    applyMiddleware(logger)
);


// console.log('This is STATE:', feelingList);
// console.log('Feelings Array GET route:', allFeelings);


ReactDOM.render(
    <Provider store={feelingStore}>
        <App /> 
    </Provider>,

document.getElementById('root'));
registerServiceWorker();
