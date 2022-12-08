import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';

function FavoriteView() {
    const dispatch = useDispatch();

    // The array of favorites
    const favoriteState = useSelector(store => store.favoriteList);

    useEffect(() => {
        dispatch({ type: 'FETCH_FAVORITES'});
    }, []); 

    // favorite.id: the id of the favorite (for the key attribute)
    // favorite.url: the image url to be displayed
    // favorite.name: the category name, to be displayed under the image
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