import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'  

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => { 
    setLoading(true) //extra precaution so that it always start with "Loading..."

    try {
    const response = await fetch(url)
    const newJobs = await response.json();
    setLoading(false)
    setJobs(newJobs)
    //console.log(newJobs)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  };

  useEffect(() => {
    fetchJobs();
  },[])

  
  if(loading){
    return (
      <section className="section loading">
        <h1>loading...</h1>
      </section>
    );
  }

  return (
  <main>
        
  </main>
  )
}

export default App
