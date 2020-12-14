import React, { useState } from 'react';
import data from './data';
import Question from './Question';
import SingleQuestion from './Question';
function App() {
//const [index, setIndex] = useState(0);
//const {id, title, info} = data[index];


  return <main>
    <div className="container">
      <h3>questions and answers about login</h3>
      <section className="info">
      {data.map((question) => {
        return <Question key={question.id} {...question}/>  
      })}      
      </section>
    </div>
      
    </main>;
}

export default App;
