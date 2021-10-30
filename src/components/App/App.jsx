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



function App() {

  return (
    <Router>
      
    <div className='App'>

    <Route path='/' >
      <Header />
    </Route>

    <Route path='/' exact>
      <FeelingForm />
    </Route>

    <Route path='/understanding' exact>
      <UnderstandingForm />
    </Route>

    <Route path='/support' exact>
      <SupportForm />
    </Route>

    <Route path='/comment' exact>
      <CommentForm />
    </Route>

    </div>

    </Router>
  );
}

export default App;
