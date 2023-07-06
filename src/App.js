import React, { useState } from 'react';

import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

import { FeedbackProvider } from './context/FeedbackContext';

const App = () => {

  const [feedback,setFeedback] = useState([
    {
      id:1,
      text:"This is my sample one",
      rating:5
    },
    {
      id:2,
      text:"This is my sample two",
      rating:7
    },
    {
      id:3,
      text:"This is my sample three",
      rating:9
    },
  ])

  return (
    <FeedbackProvider>
       <Header/>
       <div className="container">
           <FeedbackForm/>
           <FeedbackStats/>
           <FeedbackList/>
       </div>
    </FeedbackProvider>
  )
}

export default App