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
      url: '/feedback'
    }).then((response) => {
      dispatch({
        type: 'SET_FEEDBACK_LIST',
        payload: response.data
        })
      }).catch((error) => {
        console.error('GET /feedback error', error);
    })
  }

  const addFeedbackItem = (item) => {
    axios.post({
      method: 'POST',
      url: '/feedback'
    }).then((response) => {
      console.log('response is:', response);
      getFeedback();
    }).catch((error) => {
      console.error('POST /feedback error', error);
    });
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
          <Router>
            <div className='navigation'>
              <Route path='/feelings' exact>
                <FeelingsForm getFeedback={getFeedback}/>
              </Route>
              <Route path='/understanding' exact>
                <UnderstandingForm />
              </Route>
              <Route path='/support' exact>
                <SupportForm />
              </Route>
              <Route path='/comments' exact>
                <CommentsForm />
              </Route>
              <Route path='/review' exact>
                <ReviewFeedback 
                  addFeedbackItem={addFeedbackItem}
                  getFeedback={getFeedback}
                />
              </Route>
              <Route path='/success' exact>
                <SuccessPage />
              </Route>
            </div>
          </Router>
    </div>
  );
}

export default App;
