import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './action';

import Counter from './Counter';

const store = createStore(reducer); //это хранилеще

const {dispatch, subscribe, getState} = store;
const {inc, dec, rnd} = bindActionCreators( actions, dispatch);

const update = () => {
    ReactDOM.render(
        <React.StrictMode>
            <>
                <Counter
                    counter={getState().value}
                    inc={inc}
                    dec={dec}
                    rnd={() => {
                        const value = Math.floor(Math.random() * 10);
                        rnd(value)
                    }}
                />
            </>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
update();
subscribe(update);

/* const bindActionCreator = (creator, dispatch) => (...args) => {//функция bindActionCreator возвращает новую функция которая будет что то возвращать
    dispatch(creator(...args));
}  эта функция встроена в редакс, настолько популярная*/
