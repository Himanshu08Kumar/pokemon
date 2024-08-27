import React from 'react'

const Search = ({ searchQuery, onSearchChange}) => {
  return (
    <>
      <input type="text"
      onChange={onSearchChange}
      value={searchQuery}
      placeholder='Search Pokemon Name' 
      className='search'/>
    </>
  )
}

export default Search
