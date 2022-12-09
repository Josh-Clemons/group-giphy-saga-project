import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FavoriteItem from '../FavoriteItem/FavoriteItem';

function FavoriteView() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch({ type: 'FETCH_FAVORITES'});
    }, []); 

    return (
        <>
            <h3>Favorites</h3>
            <FavoriteItem />
        </>
    );
}

export default FavoriteView;