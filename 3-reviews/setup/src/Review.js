import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
console.log(people.length)
const Review = () => {
  const [index,setIndex] = useState(0);
  const {name, job, image, text} = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0
    } 
    if (number < 0 ) {
      return people.length - 1
    }
    return number
  }

  function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      // if (newIndex == people.length) {
      //   newIndex = 0;
      // }      
      return checkNumber(newIndex)
    })
  }

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      // if (newIndex == -1) {
      //   newIndex = people.length-1;
      // }
      return checkNumber(newIndex)
    })
  }

const randomPerson = () => {
  // let number = getRandomIntInclusive(0, people.length-1)
  // console.log(number)
  return setIndex(getRandomIntInclusive(0, people.length-1))
}

  return <article className="review">
    <div className="img-container">
      <img src={image} alt={name} className="person-img"/>
      <span className="quote-icon">
        <FaQuoteRight />
      </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
      <button className="prev-btn" onClick={prevPerson}>
        <FaChevronLeft />
      </button>
      <button className="next-btn" onClick={nextPerson}>
        <FaChevronRight />
      </button>      
    </div>
    <button className="random-btn" onClick={randomPerson}>        
        surprise me
      </button>
  </article>;
};

export default Review;
