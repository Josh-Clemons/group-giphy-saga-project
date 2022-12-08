import {useDispatch, useSelector} from 'react-redux';
import './FavoriteItem.css';

export default function FavoriteItem() {

    const dispatch = useDispatch();
    const favoriteList = useSelector(store => store.favoriteList);

    const handleClick = () => {
        dispatch({ type: 'ADD_CATEGORY', payload: favGif.category });
    }

    return (
        <div className="gifResult">
            {favoriteList.map(favGif => (
                <li key={favGif.id}>
                    {favGif}
                    <select id="category" value="">
                        <option value="" disabled selected hidden>Choose Category</option>
                        <option value="funny">Funny</option>
                        <option value="cohort">Cohort</option>
                        <option value="cartoon">Cartoon</option>
                        <option value="nsfw">NSFW</option>
                        <option value="meme">meme</option>
                    </select>
                    <button className='addCategoryBtn' onClick={handleClick}>Add Category</button>
                </li>
            ))}
        </div>
    )
    
};