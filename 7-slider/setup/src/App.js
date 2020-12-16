import React, { useState, useEffect } from 'react';
import data from './data';
import Slides from './Slides';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);  

  // Alternative index control
  // useEffect(() => {
  //   const lastIndex = people.length - 1;
  //   if (index < 0) {
  //     setIndex(lastIndex);
  //   }
  //   if (index > people.length) {
  //     setIndex(0);
  //   }
  // },[index,people])

  // Time interval
  useEffect(() => {
    let slider = setInterval(() => {
      addIndex(index);
    }, 3000);
    return () => clearInterval(slider) // important to clear!
  },[index])

  const addIndex = (number) => {
    number = number + 1
    if(number >= people.length){
      number = 0
    }
    return setIndex(number)
  }

  const subtractIndex = (number) => {
    number = number - 1
    if(number < 0){
      number = people.length - 1
    }
    return setIndex(number)
  }

  return (
    
  <section className="section">
    <Slides 
    people={people} 
    index={index} 
    addIndex={addIndex} 
    subtractIndex={subtractIndex}
    />     
  </section>
  );
}

export default App;
