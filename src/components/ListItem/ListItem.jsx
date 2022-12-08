import {useDispatch} from 'react-redux';
import './ListItem.css';

export default function ListItem() {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({ type: 'ADD_GIF', payload: newGif.data});
    }

    return (
        <div className="gifResult">
            //gifResult
            <div className='addFavoriteBtn' onClick={handleClick}>Add to Favorites</div>
        </div>
    )
    
};