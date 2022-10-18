import React from 'react'

const Header = (props) => {
  const styles={backgroundColor:"rgba(0,0,0,0.4)",
  color:"#ff6a95"
}
  return (
    <header style={styles}>
        <div className='container'>
            <h2>{props.text}</h2>
        </div>
    </header>
  )
}

export default Header