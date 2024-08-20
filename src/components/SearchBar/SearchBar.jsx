import React, { useState } from 'react'
import './searchBar.scss'

const types = ['Buy', "Rent"]

const SearchBar = () => {
  const[query, setQuery] = useState({
    type: 'Buy',
    location : '',
    minPrice: 0,
    maxPrice: 0 ,    
  })

  const switchType = (val) =>{
    setQuery( prevQ =>({
      ...prevQ,
      type: val
    }))
    console.log(query);
  }

  return (
    <div className='searchBar'>
      <div className="type">
        {types.map((type =>(
          <button key={type} onClick={() => switchType(type)} className={query.type === type ? "active": ""}>{type}</button>
        )))}
      </div>
      <form>
        <input type='text' name="location" placeholder='City location'></input>
        <input type='number' name="minPrice" min={0} max={100000} placeholder='min price'></input>
        <input type='number' name="maxPrice" min={0} max={100000} placeholder='max price'></input>
        <button>
          <img src="/search.png" alt="search.png" />
        </button>
      </form>
    </div>
  )
}

export default SearchBar
