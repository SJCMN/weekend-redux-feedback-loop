import { useHistory } from 'react-router-dom';

function FormNav ({handleClick, previousForm}) {

    const history = useHistory();

    const handleBack = () => {
        history.push(previousForm)
        
    }

    return (

        <div>
        <button onClick={() => handleClick()}>NEXT</button>
        <button onClick={() => handleBack ()}>BACK</button>
        </div>

    );
};

export default FormNav;