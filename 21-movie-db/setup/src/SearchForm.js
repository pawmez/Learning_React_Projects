import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const {query, setQuery, error} = useGlobalContext();
  return <h2>search component</h2>
}

export default SearchForm
