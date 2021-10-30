import { useHistory } from 'react-router-dom';

function SuccessPage () {

    const history = useHistory();
    
    return (
        <div>
            <h1>Thank You!</h1>
            <div>
                <button onClick={() => (history.push('/feedback'))}>Leave New Feedback</button>
            </div>
        </div>

    );
};

export default SuccessPage

