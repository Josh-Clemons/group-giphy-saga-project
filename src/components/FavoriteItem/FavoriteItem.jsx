import {useDispatch, useSelector} from 'react-redux';
import './FavoriteItem.css';
import { useState } from 'react';

export default function FavoriteItem() {

    const dispatch = useDispatch();
    const favoriteList = useSelector(store => store.favoriteList);
    console.log('favorite list:',  favoriteList);

    /*
    const handleClick = () => {
        dispatch({ type: 'ADD_CATEGORY', payload: categoryValue});
    }*/

    return (
        <div className="gifResult">
            <ul>

                {favoriteList.map(favGif => (
                <li key={favGif.id}>
                    <img src= {favGif.url} />
                    <select 
                            id="category" 
                            value = {favGif.category_name}
                            onChange= {(event) => {
                                dispatch({ type: 'ADD_CATEGORY', payload: {
                                    categoryValue : event.target.value,
                                    id: favGif.id
                                }
                            });
                            }}
                            >
                        <option value="none" disabled hidden>Choose Category</option>
                        <option value="funny">Funny</option>
                        <option value="cohort">Cohort</option>
                        <option value="cartoon">Cartoon</option>
                        <option value="nsfw">NSFW</option>
                        <option value="meme">meme</option>
                    </select>
                    {/*<button className='addCategoryBtn' onClick={handleClick}>Add Category</button>*/}
                </li>
            ))}
            </ul>

        </div>
    )
    
};