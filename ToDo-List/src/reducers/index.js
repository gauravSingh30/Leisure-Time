import { actions } from '../constants/index.js';
import * as _ from 'lodash';

const initialState = {
    articles: [],
    errors: {
        addArticleError: {
            value: false,
            content: "The article you are trying to add contains bad word!!!"
        }
    }
}
function rootReducer(state=initialState, action){
    if(action.type === actions.ADD_ARTICLE) {
        let modifiedState = _.cloneDeep(state);
        modifiedState.articles = state.articles.concat(action.payload);
        modifiedState.errors.addArticleError.value = false;
        return modifiedState;
    }

    if(action.type === actions.CLEAR_ARTICLES) {
        return Object.assign({}, state, {
            articles: []
        })
    }

    if(action.type === actions.DELETE_ARTICLE) {
        let filtered = state.articles.filter(article => article.id !== action.payload)
        return Object.assign({}, state, {
            articles: filtered
        })
    }

    if(action.type == actions.BAD_TITLE) {
        let modifiedState =  _.cloneDeep(state);
        modifiedState.errors.addArticleError.value = true;
        return modifiedState;
    }

    return state;
}

export default rootReducer;