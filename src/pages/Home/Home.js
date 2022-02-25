import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layDanhSachHeThongRapAction } from '../../redux/actions/QuanLyRapAction';
import HomeCarousel from '../../template/HomeTemplate/Layout/HomeCarousel/HomeCarousel';

import HomeMenu from './HomeMenu/HomeMenu'
import ListMovie from './ListMovie/ListMovie'

export default function Home(props) {
  const {heThongRapChieu} = useSelector(state=>state.QuanLyRapReducer);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(layDanhSachHeThongRapAction())
  },[])
  return (
    <>
        <HomeCarousel />
        <ListMovie />        
        <HomeMenu heThongRapChieu={heThongRapChieu}/>
    </>
  )
}
