import SearchBar from '../../components/SearchBar/SearchBar'
import './homePage.scss'
import React from 'react'

const HomePage = () => {
  return (
    <div className='homePage'>
      <div className="textContainer">
        <div className="wrapper">
          <h1 className='title'>Find real estate</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium asperiores placeat enim veniam, dolorem facilis sed laudantium deleniti odit facere optio pariatur ab molestiae repellat quibusdam, odio atque necessitatibus et.</p>
          <SearchBar></SearchBar>
          <div className="boxes">
            <div className="box">
              <h1>+16</h1>
              <h2>years of experience</h2>
            </div>
            <div className="box">
              <h1>+16</h1>
              <h2>years of experience</h2>
            </div>
            <div className="box">
              <h1>+16</h1>
              <h2>years of experience</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
      
    </div>
  )
}

export default HomePage
