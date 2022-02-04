import React, { Component } from "react";
import './style.css' ;
import MovieItem from "./MovieItem";
export default class HotMovie extends Component {
  render() {
    return (
     <section className="hot__movie">
  <div className="container">
    <span className="d-inline-block">PHIM HOT</span>
    <div className="movie__list">
      <div className="row">
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
      </div>
    </div>
  </div>
</section>

    );
  }
}
