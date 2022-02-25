import React from "react";
import "./style.css"
export default function Footer() {
  return (
    <>
      <div>
        <section className="register">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="register__left">
                  <h3 style={{color:"white"}}>ĐĂNG KÝ NHẬN THÔNG TIN CẬP NHẬT VÀ ƯU ĐÃI QUA EMAIL</h3>
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
                  <h3 style={{color:"white"}}>
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
                <div style={{display:"flex"}}>
                  <a  href="#">
                    <img src="./img/fb.png" style={{width:"50px", height:"50px"}}/>
                  </a>
                  <a >
                    <img src="./img/zalo.png" style={{width:"50px", height:"50px"}} href="#"/>
                  </a>
                  <a style={{width:"50px", height:"50px"}} href="#">
                    <img src="./img/ins.png" style={{width:"50px", height:"50px"}}/>
                  </a>
                  <a style={{width:"50px", height:"50px"}} href="#">
                    <img src="./img/youtube.png" style={{width:"50px", height:"50px"}}/>
                  </a>
                </div>
               
                <br />
                <br />
                <h6>LIÊN HỆ</h6>
                <p>Địa chỉ: Thành phố Hồ Chí Minh, Việt Nam</p>
                
              </div>
            </div>
            <hr />
          </div>
        </section>
        <footer className="footer">
         
          <p>© 2022. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}
