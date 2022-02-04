import React, { Component } from "react";

export default class TheaterLogo extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="col-2">
        <div className="content">
          <div className="circle">
            <img src={item.logo} />
          </div>
          <div className="rectangle">{item.tenHeThongRap}</div>
          <div className="over__lay" />
        </div>
      </div>
    );
  }
}
