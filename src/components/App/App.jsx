import React from 'react';
import axios from 'axios';

// CSS IMPORTS
import './App.css';

//COMPONENTS
import FeelingForm from '../FeelingForm/FeelingForm.jsx'


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <FeelingForm />
    </div>
  );
}

export default App;
