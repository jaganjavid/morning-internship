
import { FaTimes, FaEdit} from 'react-icons/fa';
import Card from './shared/Card';
import {useContext} from "react"
import FeedbackContext from '../context/FeedbackContext';

const FeedbackItem = ({item}) => {

  const {deleteHandle,editFeedback} = useContext(FeedbackContext);

  return (
    <Card reverse={false}>
        <div className="num-display">
           {item.rating}
        </div>
        <button className='close' onClick={() => deleteHandle(item.id)}>
          <FaTimes color='blue'/>
        </button>
        <div className="text-display">
           {item.text}
        </div>
        <button className='edit' onClick={() => editFeedback(item)}>
          <FaEdit color='blue'/>
        </button>
    </Card>
  )
}

export default FeedbackItem