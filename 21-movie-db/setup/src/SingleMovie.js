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
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

useEffect(() => {
  fetchMovie(`${API_ENDPOINT}&i=${id}`)
}, [])

  return <h2>single movie</h2>
}

export default SingleMovie
