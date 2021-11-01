import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';

function AdminList () {

    const allFeelings = useSelector(store => store.allFeelings);
    const dispatch = useDispatch();
    
    function getFeelings() {

        axios
        .get('/feedback')
        .then(response => {
            dispatch({
                type: 'SET_ADMIN_LIST',
                payload: response.data
            })
            console.log(response.data);
        })
        .catch(error => {
            console.log('error in get', error);
        })
    }

    console.log('from Admin', allFeelings)
    

    useEffect(() => {
        getFeelings();
      }, []);


    return (
        <div>
            <h1> Admin List </h1>
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {allFeelings.map((entry) => 
                          <tr key={entry.id}>
                          <td>{entry.feeling}</td>
                          <td>{entry.understanding}</td>
                          <td>{entry.support}</td>
                          <td>{entry.comments}</td>
                      </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default AdminList