import {useContext} from "react"
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackList = () => { 

  const {feedback} = useContext(FeedbackContext);

  if(!feedback || feedback.length === 0){
    return <p>No data yet</p>
  }

  return (
    <div>
        {feedback.map((item) => (
          <FeedbackItem key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default FeedbackList