import React from 'react'
import './gallery.css'
export default function Gallery() {
  

  return (
    <div>
      <>
      <h1 style={{textAlign:"center"}}>Gallery</h1>
  <div className="container">
    <div className="container__img-holder">
      <img
      // className='img-popup '
        src="./images/scienceday1.jpeg"
        alt="Image"
      />
    </div>
    <div className="container__img-holder">
      <img
        src="./images/scienceday2.jpeg"
        alt="Image"
      />
    </div>
    <div className="container__img-holder">
      <img
        src="https://images.pexels.com/photos/258109/pexels-photo-258109.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt="Image"
      />
    </div>
    <div className="container__img-holder">
      <img
        src="https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="Image"
      />
    </div>
    <div className="container__img-holder">
      <img
        src="https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="Image"
      />
    </div>
    <div className="container__img-holder">
      <img
        src="https://images.pexels.com/photos/589697/pexels-photo-589697.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="Image"
      />
    </div>
  </div>
  <div className="img-popup">
    <img src="" alt="Popup Image" />
    <div className="close-btn">
      <div className="bar" />
      <div className="bar" />
    </div>
  </div>
</>

    </div>
  )
}
