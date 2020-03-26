import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import { badWordsCheckMiddleware } from '../middlewares/index'

const store = createStore(
    rootReducer,
    applyMiddleware(badWordsCheckMiddleware)
);

export default store;