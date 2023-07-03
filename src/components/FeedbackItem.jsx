
import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card';
import {useContext} from "react"
import FeedbackContext from '../context/FeedbackContext';

const FeedbackItem = ({item}) => {

  const {deleteHandle} = useContext(FeedbackContext);

  return (
    <Card reverse={false}>
        <div className="num-display">
           {item.rating}
        </div>
        <button className='close' onClick={() => deleteHandle(item.id)}>
          <FaTimes/>
        </button>
        <div className="text-display">
           {item.text}
        </div>
    </Card>
  )
}

export default FeedbackItem