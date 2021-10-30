import React from 'react';
import axios from 'axios';
import {HashRouter  as Router, Route} from 'react-router-dom';

// CSS IMPORTS
import './App.css';

//COMPONENTS
import FeelingForm from '../FeelingForm/FeelingForm.jsx'


function App() {

  return (
    <Router>
      
    <div className='App'>

    <Route path='/' >
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </Route>

    <Route>
      <FeelingForm path='/feeling'/>
    </Route>

    </div>

    </Router>
  );
}

export default App;
