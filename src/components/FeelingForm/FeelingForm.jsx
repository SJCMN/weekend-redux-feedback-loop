import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useState } from 'react';

function FeelingForm () {

    const dispatch = useDispatch();
    const history = useHistory();
    const [feeling, setFeeling] = useState('');




    

    const handleClick = (e) => {
       e.preventDefault();
        dispatch({
            type: 'ADD_FEELING',
            payload: feeling
        })
        setFeeling('');
        // history.push('/')

    }

    console.log(feeling);

    return (
        <div>
            <h2>
            How are you feeling today?
            </h2>
            <label for="feeling">Feeling?</label>
            <input 
            type="number" 
            name="feeling" 
            value={feeling}
            onChange={(event) => setFeeling(event.target.value)}
            />
            <div>
                <button 
                
                onClick={(e) => handleClick(e)}>NEXT</button>
            </div>
            
            </div>
    );
};

export default FeelingForm;
