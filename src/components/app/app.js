import React , {Component} from 'react';
import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form/post-add-form';
import './app.css';

const App = () => {
    const data = [
        {
            label: 'Going to learn React',
            important: true,
            id: 'geg12'
        },
        {
            label: 'JS is cool programming language',
            important: false,
            id: 'jtk5'
        },
        {
            label: 'New Year',
            important: false,
            id: 'k9o0'
        }
    ];

    return (
        <div className='app'>
            <AppHeader/>
            <div className='search-panel d-flex'>
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>     
            <PostAddForm/>       
        </div>
    );
}

export default App;