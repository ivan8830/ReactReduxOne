import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducer';
import {inc, dec, rnd} from './action';

const store = createStore(reducer); //это хранилеще

const {dispatch, subscribe, getState} = store;

const update = () => {
    document.getElementById('counter').textContent = getState().value;
}

subscribe(update);

const incDispatch = () => dispatch(inc());
const decDispatch = () => dispatch(dec());
const rndDispatch = (value) => dispatch(rnd(value));

const inc = () => {
    return {
        type: 'INC'
    }
}

const dec = () => {
    return {
        type: 'DEC'
    }
}

const rnd = (value) => {
    return {
        type: 'RND',
        payload: value
    }
}

document.getElementById('inc').addEventListener('click', incDispatch);

document.getElementById('dec').addEventListener('click', decDispatch)

document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10);
    rndDispatch(value)
})





let state = reducer(initialState, {type: 'INC'});
console.log(state);

ReactDOM.render(
    <React.StrictMode>
        <>
      
        </>
    </React.StrictMode>,
    document.getElementById('root')
);