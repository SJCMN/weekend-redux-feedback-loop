import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import FormNav from '../FormNav/FormNav.jsx'

function CommentForm () {

    const dispatch = useDispatch();
    const [comments, setComment] = useState('');
    const history = useHistory();
    const previousForm = ('/feedback/support')

    const handleClick = () => {
        // e.preventDefault();
        dispatch({
            type: 'ADD_COMMENT',
            payload: comments
        })
        // setComment('');
        history.push('/review')
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
                <FormNav handleClick={handleClick} previousForm={previousForm}/>
            </div>
        </div>

    );
};

export default CommentForm;