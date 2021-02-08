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
      setLoading(false)
    }
    console.log(data);
  } catch(error) {
    console.log(error);
  }  
}

useEffect(() => {
  fetchMovie(`${API_ENDPOINT}&i=${id}`)
}, [id])

if(loading){
  return <div className="loading"></div>
}

if(error.show === true){
  return <div className="page-error">
    <h1>{error.msg}</h1>
    <Link to="/" className="btn">back to movies</Link>
  </div>
}
const {Poster:poster,Title:title,Plot:plot,Year:year, imdbVotes, imdbRating} = movie

  return <h2>single movie</h2>
}

export default SingleMovie
