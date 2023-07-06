import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedbackEdit, setFeedbackEdit] = useState({
      item:{},
      edit: false
    })

    const [feedback, setFeedback] = useState(
        [
            //  {
            //     id:1,
            //     text:"This is my sample one",
            //     rating:5
            //   },
            //   {
            //     id:2,
            //     text:"This is my sample two",
            //     rating:7
            //   },
            //   {
            //     id:3,
            //     text:"This is my sample three",
            //     rating:9
            //   },
            //   {
            //     id:4,
            //     text:"This is my sample three",
            //     rating:9
            //   },
        ]
    )

    const addFeedback = async(newFeedback) => {
      
       const response = await fetch(`http://localhost:5000/feedback`, {
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body: JSON.stringify(newFeedback)
       })

       const data = await response.json();

       setFeedback([data, ...feedback]);
    }

    const deleteHandle = async(id) => {
        if(window.confirm("Are you sure")){
          
           await fetch(`http://localhost:5000/feedback/${id}`,{
            method:"DELETE"
           })

           setFeedback(feedback.filter((item) => {
             return item.id !== id
           }))
        }
    }
    

     const editFeedback = (item) => {
      setFeedbackEdit({
        item:item,
        edit:true
      })
     }

     const updateFeedback = async(id, updItem) => {

      const response = await fetch(`http://localhost:5000/feedback/${id}`, {
        method:"PUT",
        headers:{
          "Content-type":"application/json"
        },
        body: JSON.stringify(updItem)
       })

       const data = await response.json();
      setFeedback(feedback.map((item) => 
      (item.id === id) ? {...item, ...data} : item))
     }

     useEffect(() => {
      fetchFeedback();
     },[])

    //  Fetch feedback

    const fetchFeedback = async () =>{
      const response = await fetch(`http://localhost:5000/feedback`);
      const data = await response.json();
      setFeedback(data);
    }
    
    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteHandle,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;