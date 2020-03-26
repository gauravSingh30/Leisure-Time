import React from 'react';
import { connect } from 'react-redux';
import { deleteArticle } from '../actions/index'

function mapStatetoProps(state) {
    return { articles: state.articles };
}

function mapDispatchtoProps(dispatch) {
    return {
        deleteArticle: id => dispatch(deleteArticle(id))
    };
}

const connectedList = (props) => {
    return (<ul>
        {
            props.articles.map(article => (<li key  = {article.id}>
                    {article.title}
                    <button onClick={() => {props.deleteArticle(article.id) }}>Remove</button>
                </li>
            ))
        }
    </ul>)
}

const List = connect(mapStatetoProps, mapDispatchtoProps)(connectedList);
export default List;


