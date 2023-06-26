import React, { useState } from 'react';

import Header from './components/Header';
import FeedbackList from './components/FeedbackList';

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
    <div className='App'>
       <Header/>
       <div className="container">
           <FeedbackList feedback={feedback}/>
       </div>
    </div>
  )
}

export default App