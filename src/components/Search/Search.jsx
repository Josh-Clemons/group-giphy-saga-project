import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ListItem from '../ListItem/ListItem';
import './Search.css';

function Search() {
    const dispatch = useDispatch();

    // this is the search term inputted by the user
    // to be used when making the GET request to Giphy
    let [newSearch, setNewSearch] = useState('');

    // set newSearch to the text currently in the input
    const handleChange = (event) => {
        setNewSearch(event.target.value);
    }

    // Payload is the search term to be sent to Giphy.
    const handleSubmit = () => {
        dispatch({
            type: 'FETCH_GIFS',
            payload: newSearch
        });
    }

    return (
        <>
            <section id="search-form">
                <h3>Search Form</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter a search term"
                        value={newSearch}
                        onChange={handleChange}
                    />
                    <input
                        type="submit"
                        value="Search"
                    />
                </form>
            </section>
            <section id="search-results">
                <ListItem />
            </section>
        </>
    );
}

export default Search;