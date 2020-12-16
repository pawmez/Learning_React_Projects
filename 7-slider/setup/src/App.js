import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setPeople(data)
  },[]);

  const {image, name, title, quote} = people[index]

  return (<main>
    <h4>{name}</h4>
  </main>
  );
}

export default App;
