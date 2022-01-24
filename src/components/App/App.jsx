import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

// Components
import CommentsForm from '../CommentsForm/CommentsForm';
import FeelingsForm from '../FeelingsForm/FeelingsForm';
import SupportForm from '../SupportForms/SupportForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import SuccessPage from '../SuccessPage/SuccessPage';

function App() {


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
          <Router>
            <div className='navigation'>
              <Route path='/feelings' exact>
                <FeelingsForm />
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
                <ReviewFeedback />
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
