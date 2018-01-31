import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return(
    <div className = 'paragraphContainer'>
     <p> This is {props.username} first react App!!</p>
     <p> Nice to learn this amazing framework.</p>
    </div>
  )
}

export default userOutput;
