import React, { Component } from 'react'

export default class SliderHome extends Component {
  render() {
    return (
    
      <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="2000">
            <img src="/images/slider_1.jpg" className="d-block w-100 h-100" alt="slider_1.jpg"/>
          </div>
        <div className="carousel-item" data-interval="2000">
          <img src="/images/slider_2.jpg" className="d-block w-100 h-100" alt="slider_2.jpg"/>
        </div>
        <div className="carousel-item" data-interval="2000">
          <img src="/images/slider_3.jpg" className="d-block w-100 h-100" alt="slider_3.jpg"/>
        </div>
        <div className="carousel-item" data-interval="2000">
          <img src="/images/slider_4.jpg" className="d-block w-100 h-100" alt="slider_4.jpg"/>
        </div>
        <div className="carousel-item" data-interval="2000">
          <img src="/images/slider_5.jpg" className="d-block w-100 h-100" alt="slider_5.jpg"/>
        </div>
    </div>
  <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

    )
  }
}
