import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import FormNav from '../FormNav/FormNav.jsx'

function SupportForm () {

    const dispatch = useDispatch();
    const [support, setSupport] = useState('');
    const history = useHistory();
    const previousForm = ('/feedback/understanding')


    const handleClick = () => {
        // e.preventDefault();
        dispatch({
            type: 'ADD_SUPPORT',
            payload: support
        })
        // setSupport('');
        history.push('/feedback/comment')
    }

    return (

        <div>
            <h2>How well are you feeling supported?</h2>
        <label htmlFor="support">Support ?</label>
        <input 
        min="0"
        max="5"
        type="number"
        name="support"
        value={support}
        onChange={(event) => setSupport(event.target.value)}
        />
        <div>
            <FormNav handleClick={handleClick} previousForm={previousForm}/>
        </div>
       
        </div>

    );
};

export default SupportForm;