import React from 'react';
import './UserInput.css'

const userInput = (props) => {

  return(
    <div>
     <input className='input' type = 'text' onChange={props.change} value={props.username}/>
    </div>
  )
}

export default userInput;
