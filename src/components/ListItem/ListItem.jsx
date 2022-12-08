import {useDispatch, useSelector} from 'react-redux';

import './ListItem.css';

export default function ListItem() {

    const dispatch = useDispatch();
    const gifResponseList = useSelector(store => store.gifResponseList);

    const handleClick = () => {
        dispatch({ type: 'ADD_GIF', payload: newGif.data});
    }

    return (
        <div className="gifResult">
            {gifResponseList.map(newGif => (
                <li key={newGif.id}>
                    <img src={newGif.images.fixed_width.url} />
                    <button className='addFavoriteBtn' onClick={handleClick}>Add to Favorites</button>
                </li>
            ))}
        </div>
    )
    
};