import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './action';

const store = createStore(reducer); //это хранилеще

const {dispatch, subscribe, getState} = store;

const update = () => {
    document.getElementById('counter').textContent = getState().value;
}

subscribe(update);

/* const bindActionCreator = (creator, dispatch) => (...args) => {//функция bindActionCreator возвращает новую функция которая будет что то возвращать
    dispatch(creator(...args));
}  эта функция встроена в редакс, настолько популярная*/


const {inc, dec, rnd} = bindActionCreators( actions, dispatch);

document.getElementById('inc').addEventListener('click', inc);

document.getElementById('dec').addEventListener('click', dec)

document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10);
    rnd(value)
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