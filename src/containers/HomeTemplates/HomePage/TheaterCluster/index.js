import React, { Component } from "react";
import TheaterLogo from "./TheaterLogo";
import './style.css'
import TheaterItem from "./TheaterItem";
import ShowtimeItem from "./ShowtimeItem";
import { connect } from "react-redux";
import { actListTheater } from "./modules/actions";
import Loader from "./../../_component/Loader";
import { actTheater } from "./TheaterItem/modules/actions";
class TheaterCluster extends Component {
  
  componentDidMount() {
    this.props.fetchListTheater();
   
  }



  renderTheater = () => {
    const {loading,data} = this.props;
    if(loading) return <Loader />
    return data?.map((item,index)=>{
      return <TheaterLogo key={index} item={item}/>
    })
  }

  
  render() {
    return (
      <section className="theater__cluster">
  <div className="container">
    <h3>CỤM RẠP</h3>
    <div className="theater__list">
      <div className="row">
       { this.renderTheater()}
      </div>
    </div>
    <div className="showtimes">
      <div className="row">
        <div className="col-6">
          <h3>CHỌN RẠP</h3>
          <div className="__overflow">
          
          </div>
        </div>
        <div className="col-6">
          <h3>CHỌN LỊCH CHIẾU</h3>
          <div className="show_time_list __overflow">
            <ShowtimeItem />
            <ShowtimeItem />
            <ShowtimeItem />
            <ShowtimeItem />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.listTheaterReducer.loading,
    data: state.listTheaterReducer.data,
   
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListTheater: () => {
      dispatch(actListTheater());
    },

    fetchTheater: (id) => {
      dispatch(actTheater(id));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TheaterCluster);
