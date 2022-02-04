import React, { Component } from "react";

export default class TheaterItem extends Component {
  render() {
    return (
      <a href="#">
        <div className="row list__theater">
          <div className="col-2">
            <img src="img/bhd-star-cineplex.png" />
          </div>
          <div className="col-10">
            <h4>{this.props.item.tenCumRap}</h4>
            <p>{this.props.item.diaChi}</p>
          </div>
        </div>
      </a>
    );
  }
}
