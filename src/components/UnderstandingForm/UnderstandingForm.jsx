import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import FormNav from '../FormNav/FormNav.jsx'

function UnderstandingForm () {

    const dispatch = useDispatch();
    const [understanding, setUnderstanding] = useState('');
    const history = useHistory();
    const previousForm = ('/feedback')


    const handleClick = () => {
        // e.preventDefault();
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: understanding
        })
        // setUnderstanding('');
        history.push('/feedback/support')
    }

    return (
        <div>
            <h2>
                How well are you understanding this content?
            </h2>
            <label htmlFor="understanding">Understanding ?</label>
            <input
            min="0"
            max="5"
            type="number"
            name="understanding"
            value={understanding}
            onChange={(event) => setUnderstanding(event.target.value)}
            />
            <div>
                <FormNav handleClick={handleClick} previousForm={previousForm}/>
            </div>
        </div>


    );
};

export default UnderstandingForm;