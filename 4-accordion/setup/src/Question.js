import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = () => {
  return <main>
    <div className="question">
      <h4>{title}</h4>
      <p>{info}</p>
    </div>
    </main>;
};

export default Question;
