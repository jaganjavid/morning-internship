import Card from "./shared/Card";
import Button from "./shared/Button";
import { useState } from "react";

import RatingSelect from "./RatingSelect";

import { v4 as uuidv4} from 'uuid';

const FeedbackForm = ({addFeedback}) => {

  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {

    event.preventDefault();

    if(text.trim().length > 10){
      const newFeedback = {
        id:uuidv4(),
        text,
        rating
      }

      addFeedback(newFeedback);

    }

    setText("")
    
  }

  const handleTextChange = ({target:{value}}) => {
    if(value === ""){
      setBtnDisabled(true);
      setMessage(null);
    } else if(value.trim().length < 10){
      setMessage("Text must be at least 10 character");
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(value);
  }



  return (
    <Card>
        <form onSubmit={handleSubmit}>
           <h2>Please add your review</h2>
          
          <RatingSelect select={(rating) => setRating(rating)}/>
           
           <p>{text}</p>

           <div className='input-group'>
             <input type="text" placeholder='Add your Review' onChange={handleTextChange} value={text}/>
           </div>

           <Button type={"submit"} isDisabled={btnDisabled} version={"primary"}> 
              send
           </Button>
        </form>

        {message && <p className="message">{message}</p>}
    </Card>
  )
}

export default FeedbackForm