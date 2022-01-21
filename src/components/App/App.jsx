import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// Components
import CommentsForm from '../CommentsForm/CommentsForm';
import FeelingsForm from '../FeelingsForm/FeelingsForm';
import SupportForm from '../SupportForms/SupportForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import SuccessPage from '../SuccessPage/SuccessPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = () => {
    axios({
      method: 'GET',
      url: ''
    })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>
  );
}

export default App;
