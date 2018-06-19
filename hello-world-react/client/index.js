import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import myReducer from './reducers/index';
import {Provider} from 'react-redux'
import Login from './components/Login';


const store = createStore(myReducer)


ReactDOM.render(
    <Provider store={store}>
        <Login/>
    </Provider>,
    document.getElementById('root'));


