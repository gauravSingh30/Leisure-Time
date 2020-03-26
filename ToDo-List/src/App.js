import React from 'react';
import List from '../src/components/list';
import Form from '../src/components/form';
import './app.less';

export function App() {
    return (
        <div>
            <h2>Articles</h2>
            <div><List /></div>

            <h2>Add a new Article</h2>
            <div><Form /></div>
        </div>
    )
}