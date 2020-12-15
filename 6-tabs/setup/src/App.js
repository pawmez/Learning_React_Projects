import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'  
  


function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => { 
    setLoading(true) //extra precaution so that it always start with "Loading..."

    try {
    const response = await fetch(url)
    const jobs = await response.json();
    setLoading(false)
    setJobs(jobs)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  };

  useEffect(() => {
    fetchJobs();
  },[])

  return <h2>tabs project setup</h2>
}

export default App
