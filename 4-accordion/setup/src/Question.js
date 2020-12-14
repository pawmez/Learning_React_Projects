import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
  const [outline, setOutline] = useState(false)
  return <article className="question">    
      <header>
      <h4>{title}</h4>
      
      <button className="btn" onClick={() => setOutline(!outline)}>
        {outline ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
        </header>   
        {outline && <p>{info}</p>}     
    </article>;
};

export default Question;
