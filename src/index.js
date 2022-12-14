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
        case 'SET_FAVORITES':
            return action.payload;
    }
    return state;
}

const gifResponseList = (state = [], action) => {
    if (action.type === 'SET_RESULTS') {
        // console.log('in set_result reducer, action.payload', action.payload)
        return action.payload;
    }
    return state;
}

//add rootSaga
function* rootSaga() {
    yield takeEvery('FETCH_GIFS', fetchSearchGifs);
    yield takeEvery('ADD_GIF', addGif);
    yield takeEvery('FETCH_FAVORITES', fetchFavoriteGifs);
    yield takeEvery('ADD_CATEGORY', addCategory)
}

//TODO: add addGif(axios.post) this happens when favorite is clicked
function* addGif(action) {
    try {              //I think this is the right route
        yield axios.post('/api/favorite', action.payload)
        console.log('adding gif', action.payload);

        yield put({
            type: 'FETCH_FAVORITES'
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
    console.log('in index.js fetchGifs', action.payload);
    try {                  // I think the route here needs to be the API url
        // the .env variable might not work, I imported it into server and configured it there
        const gifResponse = yield axios.post('/api/search', action.payload)
        yield console.log('gifs are:', gifResponse.data);

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

        yield put({
            type: 'SET_FAVORITES',
            payload: favoriteResponse.data
        });
    }
    catch (error) {
        console.log('error in index.js fetchFavoriteGifs', error);
    }
}

function* addCategory(action) {
    try {
        let category_id = 0;
        console.log('action.payload.categoryValue in addCategory: ' ,action.payload.categoryValue)
        switch (action.payload.categoryValue) {
            case 'funny':
                category_id = 1;
                break;
            case 'cohort':
                category_id = 2;
                break;
            case 'cartoon':
                category_id = 3;
                break;
            case 'nsfw':
                category_id = 4;
                break;
            case 'meme':
                category_id = 5;
                break;
            default:
                category_id = 6;
        }
            

        yield axios.put('/api/favorite/' + action.payload.id, category_id)

        yield put({
            type: 'FETCH_FAVORITES'
        })
    }
    catch (error) {
        console.log('error in index.js addCategory', error);
    }
}
//TODO: add setFavoriteGif(axios.update) this happens when the add a category?
const sagaMiddleware = createSagaMiddleware();
//TODO: create store
const store = createStore(
    combineReducers({ favoriteList, gifResponseList }),
    applyMiddleware(sagaMiddleware, logger)
);



sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
