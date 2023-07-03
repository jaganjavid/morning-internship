import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState(
        [
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
              {
                id:4,
                text:"This is my sample three",
                rating:9
              },
        ]
    )

    const deleteHandle = (id) => {
        if(window.confirm("Are you sure")){
           setFeedback(feedback.filter((item) => {
             return item.id !== id
           }))
        }
     }
    
    return <FeedbackContext.Provider value={{
        feedback,
        deleteHandle
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;