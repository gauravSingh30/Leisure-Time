import { badArticle } from '../actions/index';
import { actions } from '../constants/index';

const badWords = ["spam", "subscribe", "cursed", "money"];

export function badWordsCheckMiddleware({ getState, dispatch }) {
    return function(next) {
        return function(action) {
            if(action.type === actions.ADD_ARTICLE) {
                const filtered = badWords.filter((word) => action.payload.title.includes(word));
                if(filtered.length) {
                    return dispatch(badArticle(action.payload.title));
                }
            }
            return next(action);
        }
    }
}