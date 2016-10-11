import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Counter from './containers/Counter'
import rootReducer from './reducers';

const serialized = localStorage.getItem('counter_state'),
    initial = serialized ? JSON.parse(serialized) : {currentCount: 0};

const serializer = store => next => action => {
    next(action);
    localStorage.setItem('counter_state', JSON.stringify(store.getState()));
};

const store = createStore(
    rootReducer,
    initial,
    applyMiddleware(serializer)
);

const App = () => (
    <Provider store={store}>
        <Counter />
    </Provider>
);

export default App;

