import React, { Component } from "react";

export default class ShowtimeItem extends Component {
  render() {
    return (
      <div className="row show_time_content">
        <div className="col-4 show_time_title">
          <img src="./img/avatar_gp09.jpg" />
          <span>2D Digital</span>
        </div>
        <div className="col-8">
          <h4>Avatar</h4>
          <p>Lịch chiếu</p>
          <div className="show_time_content_list">
            <button>10:10 ~ 31/12</button>
            <button>10:10 ~ 31/12</button>
            <button>10:10 ~ 31/12</button>
            <button>10:10 ~ 31/12</button>
            <div className="clear" />
          </div>
        </div>
      </div>
    );
  }
}
