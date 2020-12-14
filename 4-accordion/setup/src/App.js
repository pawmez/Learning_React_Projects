import React, { useState } from 'react';
import data from './data';
import Question from './Question';
import SingleQuestion from './Question';
function App() {
const [index, setIndex] = useState(0);
const {id, title, info} = data[index];


  return <main className="container">
    <div>
      <Question />  
    </div>
      
    </main>;
}

export default App;
