import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './style.css'
export default function Header() {
  const dispatch = useDispatch();
  let userLogin = useSelector(state=>state.QuanLyNguoiDungReducer);
  console.log(userLogin);
  return (
   <header className="header">
  
  {localStorage.getItem('USER_LOGIN')?<p style={{textAlign:"right", paddingRight:"10px", marginBottom:"0px"}}>Xin chào {JSON.parse(localStorage.getItem('USER_LOGIN')).hoTen} </p>:""}

  <div className="header__detail container">
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#"><img src="./img/logo.svg" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink to="/home" className="nav-link" href="#">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link" href="#">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/news" className="nav-link" href="#">News</NavLink>
          </li>
          {localStorage.getItem('USER_LOGIN')?
            <button style={{
              border:"none",
              marginBottom:"0",
              padding:"0",
              backgroundColor:"transparent",
              marginLeft:"20px"
            }} onClick={()=>{
             dispatch({
               type: "DANG_XUAT"
             })
            }}>Log out</button>
          :<li className="nav-item">
            <NavLink to='/login' className="nav-link" href="#">Login</NavLink>
          </li>}
          
        </ul>
      </div>
    </nav>
  </div>
</header>

  )
}
