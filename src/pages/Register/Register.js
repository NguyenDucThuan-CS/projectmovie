import React, { Component } from "react";
import { connect } from "react-redux";
import { dangKyAction } from "../../redux/actions/QuanLyNguoiDungAction";

 class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "", 
        hoTen: "",
        maLoaiNguoiDung:"KhachHang"
      },
      errors: {
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "",
        hoTen: "",
      },
      taiKhoanValid: false,
      matKhauValid: false,
      emailValid: false,
      soDtValid: false,
      maNhomValid: false,
      maLoaiNguoiDungValid: true,
      hoTenValid: false,
      //formValid = manvValid && tennvValid && emailValid
    };
  }

  handleOnchange = (e) => {
    const { name, value } = e.target;
    this.setState({
      values: { ...this.state.values, [name]: value },
    });
  };

  handleErrors = (e) => {
    const { name, value } = e.target;

    let mess = value.trim() === "" ? name + " Khong dc rong" : "";
    let {
      taiKhoanValid,
      matKhauValid,
      emailValid,
      soDtValid,
      maNhomValid,
      maLoaiNguoiDungValid,
      hoTenValid,
    } = this.state;

    switch (name) {
      case "taiKhoan":
        taiKhoanValid = mess === "" ? true : false;
        if (value && value.length <= 4) {
          mess = "Độ dai ky tự từ 5 trở lên";
          taiKhoanValid = false;
        }
        break;
      case "matKhau":
        matKhauValid = mess === "" ? true : false;
        if (value && !value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
          mess = "Mật khẩu không đúng định dạng";
          matKhauValid = false;
        }
        break;

      case "email":
        emailValid = mess === "" ? true : false;
        if (
          value &&
          !value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        ) {
          mess = "Email k đúng định dạng";
          emailValid = false;
        }
        break;
      case "soDt":
        soDtValid = mess === "" ? true : false;
        if (value && !value.match(/^[0-9\-\+]{9,15}$/)) {
          mess = "Số điện thoại k đúng định dạng";
          soDtValid = false;
        }
        break;
      case "maNhom":
        maNhomValid = mess === "" ? true : false;
      case "hoTen":
        hoTenValid = mess === "" ? true : false;
        
        break;
      default:
        break;
    }

    this.setState(
      {
        errors: { ...this.state.errors, [name]: mess },
        taiKhoanValid,
        matKhauValid,
        emailValid,
        soDtValid,
        maNhomValid,
        maLoaiNguoiDungValid,
        hoTenValid,
      },
      () => {
        this.handleFormValid();
      }
    );
  };

  handleFormValid = () => {
    const { taiKhoanValid,
        matKhauValid,
        emailValid,
        soDtValid,
        maNhomValid,
        maLoaiNguoiDungValid,
        hoTenValid } = this.state;
    this.setState({
      formValid: taiKhoanValid && matKhauValid && emailValid && soDtValid && maNhomValid && maLoaiNguoiDungValid && hoTenValid,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dangKy(this.state.values)
    console.log(this.state.values)
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container" style={{ width: "50%" }}>
        <h3 className="title">Register</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Tên đăng nhập</label>
            <input
              type="text"
              className="form-control"
              name="taiKhoan"
              onChange={this.handleOnchange}
              onBlur={this.handleErrors}
            />
            {errors.taiKhoan ? (
              <div className="alert alert-danger">{errors.taiKhoan}</div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label>Mật khẩu</label>
            <input
              type="password"
              className="form-control"
              name="matKhau"
              onChange={this.handleOnchange}
              onBlur={this.handleErrors}
            />
            {errors.matKhau ? (
              <div className="alert alert-danger">{errors.matKhau}</div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.handleOnchange}
              onBlur={this.handleErrors}
            />
            {errors.email ? (
              <div className="alert alert-danger">{errors.email}</div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label>Số điện thoại</label>
            <input
              type="text"
              className="form-control"
              name="soDt"
              onChange={this.handleOnchange}
              onBlur={this.handleErrors}
            />
            {errors.soDt ? (
              <div className="alert alert-danger">{errors.soDt}</div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label>Mã nhóm</label>
            <input
              type="text"
              className="form-control"
              name="maNhom"
              onChange={this.handleOnchange}
              onBlur={this.handleErrors}
              value="GP01"
              disabled
            />
            {errors.maNhom ? (
              <div className="alert alert-danger">{errors.maNhom}</div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label>Mã loại người dùng</label>
            <input
              type="text"
              className="form-control"
              name="maNhom"
              onChange={this.handleOnchange}
              onBlur={this.handleErrors}
              value="CLIENT"
              disabled
            />
            
          </div>
          <div className="form-group">
            <label>Họ tên</label>
            <input
              type="text"
              className="form-control"
              name="hoTen"
              onChange={this.handleOnchange}
              onBlur={this.handleErrors}
            />
            {errors.hoTen ? (
              <div className="alert alert-danger">{errors.hoTen}</div>
            ) : (
              ""
            )}
          </div>
          <button
            type="submit"
            className="btn btn-success"
            disabled={!this.state.formValid}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dangKy: (thongTin) => {
            dispatch(dangKyAction(thongTin));
            console.log(123);
        }
    }
}

export default connect(null,mapDispatchToProps)(FormValidation)
