import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
// we're destructuring the props

const Question = ({title, info}) => {
  // Add a state variable.
  // By default it's going to be false.
  const [showInfo, setShowInfo] = useState(false);
  return <article className='question'>
    <header>
      <h4>{title}</h4>
      <button className='btn' onClick={()=>setShowInfo(!showInfo)}>
        {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
      </button>
    </header>
    {showInfo &&
    <p>
      {info}
    </p>
    }
  </article>;
};
export default Question;
