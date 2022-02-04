import React, { Component } from "react";

export default class MovieItem extends Component {
  render() {
    return (
      <div className="col-3">
        <div className="card movie__item">
          <div className="img">
            <img
              className="img_item"
              src="./img/movie-1.jpg"
              alt="Card image cap"
            />
            <span>
              <i className="fa fa-play" />
            </span>
            <div className="over__lay" />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">John Wick III</h5>
            <button className="btn">Mua vé</button>
            <p className="card-text type-movie">2021 - Giật gân, lãng mạn</p>
            <p className="card-text star-list">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </p>
          </div>
        </div>
      </div>
    );
  }
}
