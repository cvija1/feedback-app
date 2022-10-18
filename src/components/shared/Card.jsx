import React from 'react'

const Card = ({children,reverse}) => {
    const reverseStyle={
        backgroundColor:reverse ? 'rgba(0,0,0,0.4)':'#fff',
        color:reverse ? '#fff':'#000'
    };
  return (
    <div className='card' style={reverseStyle}>
        {children}
    </div>
  )
}

export default Card