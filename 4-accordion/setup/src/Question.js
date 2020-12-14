import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
  const [outline, setOutline] = useState(false)
  return <main>
    <div className="question">
      <h4>{title}</h4>
      <p>{info}</p>
      <button className="btn" onClick={() => setOutline(!outline)}>
        {outline ? AiOutlinePlus : AiOutlineMinus}
        </button>
    </div>
    </main>;
};

export default Question;
