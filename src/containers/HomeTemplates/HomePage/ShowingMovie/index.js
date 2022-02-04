import React, { Component } from "react";
import MovieItem from "./MovieItem";
import "./style.css";
import { connect } from "react-redux";
import { actLitsMovie } from "./modules/actions";
import Loader from "../../_component/Loader";

class ShowingMovie extends Component {
  componentDidMount() {
    this.props.fetchDataMovie();
  }

 renderListMovie = () => {
   if(this.props.loading) {
     return <Loader />
   }

   return this.props.data?.map((movie)=>{
      return <MovieItem key={movie.maPhim} movie={movie}/>
   })
 }
  render() {
    return (
      <section className="showing__movie">
        <div className="title">
          <div className="row">
            <div className="col-6 oop1">
              <h3 className="title-1 active">
                <a href="#">PHIM ĐANG CHIẾU</a>
              </h3>
            </div>
            <div className="col-6 oop2">
              <h3 className="title-2">
                <a href="#">PHIM SẮP CHIẾU</a>
              </h3>
            </div>
          </div>
        </div>
        <div className="container">
          <span className="d-inline-block">PHIM HOT</span>
          <div className="movie__list">
            <div className="row">
              { this.renderListMovie() }
            </div>
          </div>
        </div>
        <div className="over__lay" />
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.listMovieReducer.loading,
    data: state.listMovieReducer.data,
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchDataMovie: () => {
        dispatch(actLitsMovie());
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowingMovie);
