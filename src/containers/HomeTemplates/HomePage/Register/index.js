import React, { Component } from "react";
import './style.css' ;
export default class Register extends Component {
  render() {
    return (
    
        <section className="register">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="register__left">
                  <h3>ĐĂNG KÝ NHẬN THÔNG TIN CẬP NHẬT VÀ ƯU ĐÃI QUA EMAIL</h3>
                  <p>
                    Cơ hội nhận được mã giảm giá và thông tin phim mới nhanh
                    nhất.
                  </p>
                  <div className="input-group mb-3 enter_email">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Recipient's username"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-success" type="button">
                        Button
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="register__right">
                  <h3>
                    ỨNG DỤNG ĐẶT VÉ XEM PHIM TIỆN LỢI ĐÃ CÓ TRÊN SMARTPHONE
                  </h3>
                  <p>
                    Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm
                    rạp và đổi quà hấp dẫn. Tải ứng dụng ngay:
                  </p>
                  <a href="#">
                    <img src="img/download.png" />
                  </a>
                  <a href="#">
                    <img src="img/download (1).png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="over__lay"></div>
        </section>
    );
  }
}
