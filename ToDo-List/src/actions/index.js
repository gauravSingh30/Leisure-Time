import { actions } from '../constants/index';

export const addArticle = (payload) => {
    return {
        type: actions.ADD_ARTICLE,
        payload
    };
}

export const clearList = () => {
    return {
        type: actions.CLEAR_LIST
    }
}

export const deleteArticle = (id) => {
    return {
        type: actions.DELETE_ARTICLE,
        payload: id
    }
}

export const badArticle = (title) => {
    return {
        type: actions.BAD_TITLE,
        title
    }
}