import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react';

import axios from 'axios';

function AdminList () {

    const dispatch = useDispatch();
    // const [support, setSupport] = useState('');
    const allFeelings = useSelector(store => store.allFeelings);
    const history = useHistory();
    // let adminList = []
    
    
    
    const getFeelings = () => {

        axios.get('/feedback')
        .then(response => {
            dispatch({
                type: 'SET_FEELINGS',
                payload: response.data
            })
            console.log('GET route says:', response.data);
            // adminList = response.data
        })
        .catch(error => {
            console.log('error in get', error);
        })
    }

  
   
    useEffect(() => {
        getFeelings();
      }, []);

      console.log('from Admin', allFeelings)

    return (
        <div>
            <h1 onClick={() => (history.push('/feedback'))}> Admin List </h1>
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
                    
                    {allFeelings.map(entry =>         
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

