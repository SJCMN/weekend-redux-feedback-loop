import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers,  applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { Provider } from 'react-redux';

const feelingList = {
    feeling: '',
    understanding: '',
    support: '',
    comments: ''
}

const feelings = (state = feelingList, action ) => {
    if (action.type === 'ADD_FEELING'){
        console.log('payload is:', {feeling:action.payload});
        console.log('state is:',state);
        
        return {...state, feeling:action.payload};
        
    }
    return state;
}

const feelingStore = createStore(
    combineReducers({
        feelings
    }), 
    applyMiddleware(logger)
);


console.log('This is STATE:', feelingList);

ReactDOM.render(
    <Provider store={feelingStore}>
        <App /> 
    </Provider>,

document.getElementById('root'));
registerServiceWorker();
