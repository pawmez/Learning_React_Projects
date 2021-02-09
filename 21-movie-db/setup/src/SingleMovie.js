import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'
import useFetch from './useFetch'

const SingleMovie = () => {
  const {id} = useParams();
  const {loading, error, data:movie} = useFetch(`&i=${id}`)  

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

  return <section className="single-movie">
    <img src={poster} alt={title}/>
    <div className="single-movie-info">
      <h2>{title}</h2>
      <p>{plot}</p>
      <h3>Number of IMDB votes: {imdbVotes}, IMDB rating: {imdbRating}</h3>
      <h4>{year}</h4>
      <Link to="/" className="btn">back to movies</Link>
    </div>
  </section>
}

export default SingleMovie
