import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { useHistory } from 'react-router-dom'



function FeelingForm () {

    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState('');
    const history = useHistory();
    const feelingData = useSelector(store => store.feelings);

    const handleClick = () => {
    //    e.preventDefault();
        dispatch({
            type: 'ADD_FEELING',
            payload: Number(feeling)
        })
        // setFeeling(currentFeeling.feeling);
        history.push('/feedback/understanding')

    }


    return (
        <div>
            <h2>
            How are you feeling today?
            </h2>
            <label htmlFor="feeling">Feeling?</label>
            <input 
            min="0"
            max="5"
            type="number" 
            name="feeling" 
            value={feeling}
            placeholder={feelingData.feeling}
            onChange={(event) => setFeeling(event.target.value)}
            />
            <div>
                <button onClick={(e) => handleClick(e)}>NEXT</button>
            </div>
            
            </div>
    );
};

export default FeelingForm;
