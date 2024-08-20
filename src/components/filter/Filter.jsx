import React from 'react'
import './filter.scss'

const Filter = () => {
  return (
    <div className='filter'>
      <h1>Search result for <b>London</b></h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input type="text" id='city' name='city' placeholder='city location'/>
        </div>
      </div>
      <div className="bottom">
        <div className="item">
            <label htmlFor="type">type</label>
            <select name="type" id="type">
              <option value="">Any</option>
              <option value="Buy">Buy</option>
              <option value="Rent">Rent</option>
            </select>
        </div>
        <div className="item">
            <label htmlFor="Property">Location</label>
            <select name="Property" id="Property">
              <option value="">Any</option>
              <option value="apartement">apartement</option>
              <option value="house">house</option>
              <option value="condo">condo</option>
              <option value="land">land</option>
            </select>
        </div>
        <div className="item">
            <label htmlFor="minPrice">Min Price</label>
            <input type="number" id='minPrice' name='minPrice' placeholder='Any'/>
        </div>
        <div className="item">
            <label htmlFor="maxPrice">Location</label>
            <input type="number" id='maxPrice' name='maxPrice' placeholder='Any'/>
        </div>
        <div className="item">
            <label htmlFor="Bedroom">Bedroom</label>
            <input type="number" id='Bedroom' name='Bedroom' placeholder='Any'/>
        </div>
        <button>
          <img src="/search.png" alt="" />
        </button>

      </div>
    </div>
  )
}

export default Filter
