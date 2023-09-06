import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducer';

import {Provider} from 'react-redux';

import App from './components/App';

const store = createStore(reducer); //это хранилеще

    ReactDOM.render(
        <React.StrictMode>
            <>
                <Provider store={store}>
                    <App/> 
                </Provider>

            </>
        </React.StrictMode>,
        document.getElementById('root')
    );

/* const bindActionCreator = (creator, dispatch) => (...args) => {//функция bindActionCreator возвращает новую функция которая будет что то возвращать
    dispatch(creator(...args));
}  эта функция встроена в редакс, настолько популярная*/
