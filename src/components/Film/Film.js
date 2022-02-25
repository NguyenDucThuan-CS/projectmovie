import React from 'react'
import { history } from '../../App'

export default function Film(props) {
  return (
    <div className="col-3">
        <div className="card movie__item">
          <div className="img">
            <img className="img_item" src={props.phim.hinhAnh} alt="Card image cap" />
            <span><i className="fa fa-play" /></span>
            <div className="over__lay" />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">{props.phim.tenPhim}</h5>
            <button onClick = {
              ()=>{
                history.push(`/detail/${props.phim.maPhim}`)
              }
            }className="btn btn-info">Mua vé</button>
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
  )
}
