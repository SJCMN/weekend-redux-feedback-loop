import { useDispatch } from 'react-redux';
import { useState} from 'react';
import { useHistory } from 'react-router-dom';

function CommentForm () {

    const dispatch = useDispatch();
    const [comments, setComment] = useState('');
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_COMMENT',
            payload: comments
        })
        setComment('');
        history.push('/')
    }

    return (

        <div>
            <h2>Please share a comment</h2>
            <label htmlFor="comment">Comments</label>
            <input
            maxLength = "32"
            type="text"
            name="comment"
            value={comments}
            onChange={(event) => setComment(event.target.value)}
            />
            <div>
                <button onClick={(e) => handleClick(e)}>NEXT</button>
            </div>
        </div>

    );
};

export default CommentForm;