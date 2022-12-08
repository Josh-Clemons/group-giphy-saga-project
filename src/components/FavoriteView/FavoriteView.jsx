import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';

function FavoriteView() {
    const dispatch = useDispatch();

    // The array of favorites
    const favoriteState = useSelector(store => store.favoriteList);

    useEffect(() => {
        dispatch({ type: 'FETCH_FAVORITES'});
    }, []); 

    return (
        <section id="favorite-list">
            {favoriteState.map((favorite) => {
                return (
                    <div key={favorite.id} class="favorite-item">
                        <img src={favorite.url} />
                        <p>{favorite.name}</p>
                    </div>
                );
            })}
        </section>
    );
}

export default FavoriteView;