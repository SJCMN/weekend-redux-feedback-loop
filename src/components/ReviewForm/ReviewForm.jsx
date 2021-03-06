import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function ReviewForm ({getFeelings}) {

    const feelingData = useSelector(store => store.feelings);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = () => {
        // e.preventDefault();
        if (feelingData.comments != ''){
        axios.post('/feedback', feelingData)
        .then(response => {
        history.push('/success')
        dispatch({type:'CLEAR_FEELINGS'});
        getFeelings();
        })
        .catch(error => {
            console.log('Error in POST', error);
        })
    }
        history.push('/feedback')

    }

    // console.log('This is the feelingData from store:', feelingData);

    return (
        <div>
            <div>
                <h1>Review Your Feedback</h1>
            </div>
            <div>
                <h2>Feelings: {feelingData.feeling}</h2>
                <h2>Understanding: {feelingData.understanding}</h2>
                <h2>Support: {feelingData.support}</h2>
                <h2>Comments: {feelingData.comments}</h2>
            </div>
            <div>
                <button onClick={(e) => handleSubmit (e)}>SUBMIT</button>
            </div>
        </div>

    );
};

export default ReviewForm;