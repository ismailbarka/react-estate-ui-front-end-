import React from 'react'
import './singlePage.scss'
import Slider from '../../components/slider/Slider'
import {singlePostData, userData} from '../../lib/DummyData'
import Map from '../../components/map/Map'

const SinglePage = () => {
  return (
    <div className='singlePage'>
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">{singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>
      <div className="features">        
        <div className="wrapper">
          <p className='title'>General</p>
          <div className="listVertical">
          <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsable</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet policy</span>
                <p>pets Alowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className='title'>Sizes</p>
          <div className="sizes">
              <div className="size">
                <img src="/size.png" alt="" />
                <span>80km</span>
              </div>
              <div className="size">
                <img src="/bed.png" alt="" />
                <span>2 beds</span>
              </div>
              <div className="size">
                <img src="/bath.png" alt="" />
                <span>2 bathrooms</span>
              </div>
          </div>
          <p className='title'>Nerby Places</p>
          <div className="ListHorizontal">
          <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsable</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet policy</span>
                <p>pets Alowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          
          <p className='title'>Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]}></Map>
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a message
            </button>
            <button>
              <img src="/save.png" alt="" />
              save the place
            </button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default SinglePage