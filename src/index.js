import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';


//add reducer. state is set to an empty array since we are
//getting a list of multiple results
const favoriteList = (state = [], action) => {
    switch (action.type) {
        case 'SET_GIFS':
            return action.payload;
    }
    return state;
}

const gifResponseList = (state = [], action) => {
    if (action.type === 'SET_RESULTS') {
        return action.payload
    }
    return state;
}

//add rootSaga
function* rootSaga() {
    yield takeEvery('FETCH_GIFS', fetchSearchGifs);
    yield takeEvery('ADD_GIF', addGif);
    yield takeEvery('FETCH_FAVORITES', fetchFavoriteGifs );
}

//TODO: add addGif(axios.post) this happens when favorite is clicked
function* addGif(action) {
    try {              //I think this is the right route
        yield axios.post('/api/favorite', action.payload)
        console.log('adding gif', action.payload);

        yield put ({
            type: 'FETCH_GIFS'
        })
    }
    catch (error) {
        console.log('error in index.js addGif', error);
    }
}

//TODO: add fetchGifs(axios.get)
//Should this be what runs when the search btn is clicked?
//if so, I think the url needs to be the giphy api url
function* fetchSearchGifs(action) {
    console.log('in index.js fetchGifs');
    try {                  // I think the route here needs to be the API url
        const gifResponse = yield axios.get('INSERT API URL HERE')
        console.log('gifs are:', gifResponse);

        yield put({
            type: 'SET_RESULTS',
            payload: gifResponse.data
        })
    }
    catch (error) {
        console.log('error in index.js fetchGifs', error);
    }
}

function* fetchFavoriteGifs(action) {
    console.log('in index.js fetchFavoriteGifs');
    try {
        const favoriteResponse = yield axios.get('/api/favorite');
        console.log('favorite gifs:', favoriteResponse);

        yield put ({
            type: 'FETCH_FAVORITES',
            payload: favoriteResponse.data
        });
    }
    catch (error) {
        console.log('error in index.js fetchFavoriteGifs', error);
    }
}


//TODO: add setFavoriteGif(axios.update) this happens when the add a category?
const sagaMiddleware = createSagaMiddleware();
//TODO: create store
const store = createStore(
    combineReducers({favoriteList}, {gifResponseList}),
    applyMiddleware(sagaMiddleware, logger)
);



sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store ={store}><App /></Provider>, document.getElementById('root'));
