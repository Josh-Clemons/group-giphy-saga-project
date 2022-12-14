import {useDispatch, useSelector} from 'react-redux';

import './ListItem.css';

export default function ListItem() {

    const dispatch = useDispatch();
    const gifResponseList = useSelector(store => store.gifResponseList);

    return (
        <div className="gifResult">
            {gifResponseList.map(newGif => (
                <li key={newGif.id}>
                    <img src={newGif.images.fixed_width.url} />
                    <button className='addFavoriteBtn' onClick={() => dispatch({ type: 'ADD_GIF', payload: newGif})}>Add to Favorites</button>
                </li>
            ))}
        </div>
    )
    
};