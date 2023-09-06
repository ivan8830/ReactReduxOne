import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import {inc, dec, rnd} from './action';

const store = createStore(reducer); //это хранилеще

const {dispatch, subscribe, getState} = store;

const update = () => {
    document.getElementById('counter').textContent = getState().value;
}

subscribe(update);

const bindActionCreator = (creator, dispatch) => (...args) => {//функция bindActionCreator возвращает новую функция которая будет что то возвращать
    dispatch(creator(...args));
}


const incDispatch = bindActionCreators(inc, dispatch);
const decDispatch = bindActionCreators(dec, dispatch);
const rndDispatch = bindActionCreators(rnd, dispatch);

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