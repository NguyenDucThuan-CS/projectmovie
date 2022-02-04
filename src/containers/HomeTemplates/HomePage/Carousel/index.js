import React, { Component } from "react";
import './style.css'
export default class Carousel extends Component {
  render() {
    return (
      <section className="my-carousel">
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators carousel__indicator">
      <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
      <li data-target="#carouselExampleIndicators" data-slide-to={1} />
      <li data-target="#carouselExampleIndicators" data-slide-to={2} />
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="./img/hero-1.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="./img/hero-2.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="./img/hero-3.jpg" className="d-block w-100" alt="..." />
      </div>
    </div>
  </div>
  <div className="carousel__overlay" />
  <div className="carousel__detail container">
    <span>ACTION, ADVENGER, FANTASY</span>
    <h1>End of the World: part 1</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
      molestiae id provident est aliquid dicta rem illo sed dolor harum?
    </p>
    <div className="carousel__trailer">
      <span className="d-inline-block">BG</span>
      <button className="btn-orange">
        <i className="fa fa-play" />
        Play trailer
      </button>
    </div>
  </div>
</section>

    );
  }
}
