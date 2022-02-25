import React, {useEffect} from 'react';
import './style.css'
import { useSelector, useDispatch } from 'react-redux';
import Film from '../../../components/Film/Film';
import { layDanhSachPhimAcion } from '../../../redux/actions/QuanLyPhimActions';

export default function ListMovie() {
  const {arrFilm} = useSelector(state=>state.QuanLyPhimReducer)
  const dispatch = useDispatch()
  const renderFilm = () => {
      return arrFilm.map((phim,index)=>{
        return <Film phim={phim} key={index}/>
      })
  }
  useEffect(()=>{
    dispatch(layDanhSachPhimAcion())
  },[])
  return (
    <section className="showing__movie">
  <div className="container">
   
    <button className='btn btn-info' style = {{marginTop:'20px'}}> PHIM ĐANG CHIẾU</button>
  

    <div className="movie__list">
      <div className="row">
       {
         renderFilm()
       }

      </div>
    </div>
  </div>
 {/*  <div className="over___lay" /> */}
</section>

  )
}
