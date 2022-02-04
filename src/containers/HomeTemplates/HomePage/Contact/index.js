import React, { Component } from "react";
import './style.css'
export default class Contact extends Component {
  render() {
    return (
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <h6>MHCENTER</h6>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Điều khoản MHCenter</a>
                </li>
                <li>
                  <a href="#">Thỏa thuận sử dụng</a>
                </li>
                <li>
                  <a href="#">Chính sách bảo mật</a>
                </li>
                <li>
                  <a href="#">Chăm sóc khách hàng</a>
                </li>
                <li>
                  <a href="#">Giấy phép bản quyền</a>
                </li>
              </ul>
            </div>
            <div className="col-3 partner">
              <h6>ĐỐI TÁC</h6>
              <img src="./img/bhd.8de3119b.jpg" />
              <img src="./img/bhd.8de3119b.jpg" />
              <img src="./img/bhd.8de3119b.jpg" />
              <img src="./img/bhd.8de3119b.jpg" />
              <img src="./img/bhd.8de3119b.jpg" />
              <img src="./img/bhd.8de3119b.jpg" />
            </div>
            <div className="col-3 on__phone">
              <h6>ỨNG DỤNG TRÊN ĐIỆN THOẠI</h6>
              <a href="#">
                <img src="img/download.png" />
              </a>
              <a href="#">
                <img src="img/download (1).png" />
              </a>
            </div>
            <div className="col-3 contact__us">
              <h6>KẾT NỐI VỚI CHÚNG TÔI</h6>
              <a href="#">
                <img src="./img/fb.png" />
              </a>
              <a href="#">
                <img src="./img/zalo.png" />
              </a>
              <a href="#">
                <img src="./img/ins.png" />
              </a>
              <a href="#">
                <img src="./img/youtube.png" />
              </a>
              <br />
              <br />
              <h6>LIÊN HỆ</h6>
              <p>Địa chỉ: Gò Vấp, Thành phố Hồ Chí Minh, Việt Nam</p>
              <p>Email: nguyenducthuan8362@gmail.com</p>
              <p>SDT: 0346879659</p>
            </div>
          </div>
          <hr />
        </div>
      </section>
    );
  }
}
