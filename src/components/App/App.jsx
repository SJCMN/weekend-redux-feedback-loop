import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

// CSS IMPORTS
import './App.css';

//COMPONENTS
import Header from '../Header/Header.jsx'
import FeelingForm from '../FeelingForm/FeelingForm.jsx'
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm.jsx'
import SupportForm from '../SupportForm/SupportForm.jsx'
import CommentForm from '../CommentForm/CommentForm.jsx'
import ReviewForm from '../ReviewForm/ReviewForm.jsx'
import SuccessPage from '../SuccessPage/SuccessPage.jsx'
import AdminList from '../AdminList/AdminList.jsx'


function App() {

  return (
    <Router>
      
    <div className='App'>

    <Route path='/feedback'  >
      <Header />
    </Route>

    <Route path='/feedback' exact >
      <FeelingForm />
    </Route>

    <Route path='/feedback/understanding' >
      <UnderstandingForm />
    </Route>

    <Route path='/feedback/support' >
      <SupportForm />
    </Route>

    <Route path='/feedback/comment' >
      <CommentForm />
    </Route>

    <Route path='/review' exact>
      <ReviewForm />
    </Route>

    <Route path='/success' exact>
      <SuccessPage />
    </Route>

    <Route path='/admin' exact>
      <AdminList />
    </Route>
    

    </div>

    </Router>
  );
}

export default App;
