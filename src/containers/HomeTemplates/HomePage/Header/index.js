import React, { Component } from "react";
import './style.css' ;
export default class Header extends Component {
  render() {
    return (
     <header className="header">
  <p className="text-right header__info container">
    <i className="fa fa-phone" />
    <span className="d-inline-block">0988448484</span>
    <i className="fa fa-search" />
  </p>
  <div className="header__detail container">
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">
        <img src="./img/logo.svg" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Trang chủ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Phim
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Cụm rạp
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Liên hệ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Đăng kí
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Đăng nhập
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</header>

    );
  }
}
