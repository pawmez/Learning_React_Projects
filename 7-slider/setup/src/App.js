import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);  

  const addIndex = (number) => {
    number = number + 1
    if(number >= people.length){
      number = 0
    }
    return number
  }

  const subtractIndex = (number) => {
    number = number - 1
    if(number < 0){
      number = people.length - 1
    }
    return number
  }

  return (
  <section className="section">
    <div className="title">
      <h2>
        <span>/</span>reviews
      </h2>
    </div>
    <div className="section-center">
      {people.map((person, personIndex) => {
        const {id, image, name, title, quote} = person;
        // By default, position slides on the right hand side
        let position = 'nextSlide'
        // Position in the center
        if(personIndex === index){
          position = 'activeSlide'
        }
        // Slide on the left: either with index -1 ORa if 0, the last one in array 
        if(personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
          position = 'lastSlide'
        }

        return (
        <article className={position} key={id}>
          <img src={image} alt={name} className="person-img"/>
          <h4>{name}</h4>
          <p className="title">{title}</p>
          <p className="text">{quote}</p>
          <FaQuoteRight className="icon"/>
        </article>
        );
      })}
      <button className="prev">
        <FiChevronLeft onClick={()=> setIndex(subtractIndex(index))}/>
      </button>
      <button className="next">
        <FiChevronRight onClick={()=> setIndex(addIndex(index))}/>
      </button>
    </div>    
  </section>
  );
}

export default App;
