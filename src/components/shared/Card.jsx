import React from 'react'

const Card = ({children,reverse}) => {
    
  return (
    <div className={`card ${reverse ? "reverse" : null}`}>
      {children}
    </div>
  )

// return (
//     <div className='card' style={{
//         backgroundColor: reverse ? "#333333" : "#ffffff",
//         color: reverse ? "#ffffff" : "#000000"
//     }}>
//       {children}
//     </div>
// )
}

export default Card