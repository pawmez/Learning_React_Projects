import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'

const SingleMovie = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({show:false,msg:''});

const fetchMovie = async (url) => {
  setLoading(true);
  try {
    const response = await fetch(url);
    const data = await response.json();
    if(data.Response === 'True') {
      setMovie(data)
      setLoading(false)
    } else {
      setError({show:true,msg:data.Error})
    }
    console.log(data);
  } catch(error) {
    console.log(error);
  }
  
}

useEffect(() => {
  fetchMovie(`${API_ENDPOINT}&i=${id}`)
}, [id])

  return <h2>single movie</h2>
}

export default SingleMovie
