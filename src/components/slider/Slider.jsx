 import React, { useState } from 'react'
import "./slider.scss"

const Slider = ({images}) => {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (derection) =>{
    if(derection === "left" && imageIndex > 0)
      setImageIndex(imageIndex - 1);
    else if(derection === "left" && imageIndex === 0)
      setImageIndex(3);
    else if(derection === "right" && imageIndex < images.length-1)
      setImageIndex(imageIndex + 1);
    else
      setImageIndex(0);
  }

  return (
    <div className='slider'>
      { imageIndex !== null &&
      <div className="fullSlider">
        <div className="arrow">
          <img onClick={() =>changeSlide("left")} src="/arrow.png" alt="" />
        </div>
        <div className="imgContainer">
          <img src={images[imageIndex]} alt="" />
        </div>
        <div className="arrow">
          <img onClick={() => changeSlide("right")} className='right' src="/arrow.png" alt="" />
        </div>
        <div className="close" onClick={() => setImageIndex(null)}>X</div>
      </div>
      }
        <div className="bigImage">
            <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
        </div>
        <div className="smallImages">
             {images.slice(1).map((image, index)=>(
                <img onClick={() =>setImageIndex(index + 1)} src={image} alt="" key={index}/>
             ))}
        </div>
    </div>
  )
}

export default Slider
