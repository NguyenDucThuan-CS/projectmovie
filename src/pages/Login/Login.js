import React from 'react'
import "./style.css"
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungAction';
export default function Login(props) {

  const dispatch = useDispatch();

  const {userLogin} = useSelector(state=>state.QuanLyNguoiDungReducer);
  
  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
    },
    onSubmit: values => {
      dispatch(dangNhapAction(values))
      console.log('values', values)
    },
  });


  return (
 <div className="wrapper fadeInDown">
  <div id="formContent">
    {/* Tabs Titles */}
    {/* Icon */}
   
    {/* Login Form */}
    <form onSubmit={(e)=>{
        e.preventDefault();
        formik.handleSubmit(e);
    }}>
      <input type="text" id="login" className="fadeIn second" name="taiKhoan" onChange={formik.handleChange} placeholder="login" />
      <input type="text" id="password" className="fadeIn third" name="matKhau" onChange={formik.handleChange} placeholder="password" />
      <input type="submit" className="fadeIn fourth" defaultValue="Log In" />
    </form>
    {/* Remind Passowrd */}
    <div id="formFooter">
      <a className="underlineHover" href="/register">Chưa có tài khoản? Đăng kí</a>
    </div>
  </div>
</div>

  )
}
