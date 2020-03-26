import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { addArticle, clearList} from '../actions/index'
import uuid from 'uuid';

function mapDispatchtoProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article)),
        clearList: () => dispatch(clearList())
    };
}

function mapStatetoProps(state) {
    return {
        articles: state.articles,
        errors: state.errors
    };
}

const connectedForm = (props) => {
    const [title, setTitle] = useState("");

    useEffect(() => {
        if(props.errors.addArticleError.value === false) {
            setTitle("");
        }
    }, [props.errors.addArticleError.value, props.articles]);

    function handleInput(event) {
        setTitle(event.target.value);
    }

    function onSubmit(event) {
        event.preventDefault()
        props.addArticle({id: uuid(), title});
    }

    function removeAllArticles() {
        props.clearList();
    }

    function badArticleError() {
        if(props.errors.addArticleError.value) {
            return (
                <div className="error-badword">
                    {props.errors.addArticleError.content}
                </div>
            )
        }
        return null;
    }

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={title} onChange={(event) => handleInput(event)}>
                    </input>
                    <button onClick={onSubmit} type="submit">SAVE</button>
                    <button id="clear" onClick={removeAllArticles}>Clear articles</button>
                </div>
            </form>
            {badArticleError()}
        </div>
    )
}

const Form = connect(mapStatetoProps, mapDispatchtoProps)(connectedForm);
export default Form;

