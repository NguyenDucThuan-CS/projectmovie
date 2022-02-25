import React, { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  datVe,
  layChiTietPhongVeAction,
} from "../../redux/actions/QuanLyDatVeAction";
import { CloseOutlined } from "@ant-design/icons";
import { DAT_VE } from "../../redux/types/QuanLyDatVeType";
import style from "./Checkout.module.css";

import "./Checkout.css";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { USER_LOGIN } from "../../util/settings/config";
import { Tabs } from "antd";
import { layThongTinTaiKhoanAction } from "../../redux/actions/QuanLyNguoiDungAction";

const { TabPane } = Tabs;

function Checkout(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
 
  const { chiTietPhongVe, danhSachGheDangDat, danhSachGheKhachDat } = useSelector(
    (state) => state.QuanLyDatVeReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layChiTietPhongVeAction(props.match.params.id));
  }, []);

  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;
  const renderSeats = () => {
    return danhSachGhe?.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
      let classGheDangDat = "";
      let classGheDaDuocDat = "";

      let classGheKhachDat = "";
      let indexKhachDat = danhSachGheKhachDat.findIndex((gheKD) => {
        return gheKD.maGhe === ghe.maGhe;
      })

      if (indexKhachDat !== -1) {
        classGheKhachDat = "gheKhachDat";
      }



      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDaDuocDat = "gheDaDuocDat";
      }
      let indexGheDD = danhSachGheDangDat.findIndex((gheDD) => {
        return gheDD.maGhe === ghe.maGhe;
      });

      if (indexGheDD != -1) {
        classGheDangDat = "gheDangDat";
      }
      
      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              dispatch({
                type: DAT_VE,
                gheDuocChon: ghe,
              });
            }}
            disabled={ghe.daDat || classGheKhachDat !=''}
            className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat} ${classGheKhachDat
            }`}
          >
            {ghe.daDat ? <CloseOutlined /> : ghe.stt}
          </button>
        </Fragment>
      );
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <div className="justify-center mt-5">
            <div
              className=""
              style={{
                background: "black",
                width: "80%",
                height: "10px",
                margin: "0 auto",
              }}
            ></div>
            <div
              className={`${style["trapezoid"]}`}
              style={{ margin: "0 auto" }}
            ></div>
          </div>
          <>{renderSeats()}</>
        </div>
        <div className="col-4">
          <h3 className="">
            {danhSachGheDangDat
              .reduce((tongtien, ghe, index) => {
                return (tongtien += ghe.giaVe);
              }, 0)
              .toLocaleString()}
          </h3>
          <hr />
          <h3>{thongTinPhim?.tenPhim}</h3>
          <p>
            Dia diem: {thongTinPhim?.tenCumRap} - {thongTinPhim?.tenRap}
          </p>
          <p>
            Ngay chieu: {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}
          </p>
          <hr />
          <div className="d-flex">
            <span style={{ display: "inline-block", width: "75%" }}>
              Ghe:{" "}
              {danhSachGheDangDat.map((gheDD, index) => {
                return (
                  <span
                    key={index}
                    className=""
                    style={{ color: "green", marginRight: "5px" }}
                  >
                    {gheDD.stt}
                  </span>
                );
              })}
            </span>
            <div>
              <span>
                {danhSachGheDangDat
                  .reduce((tongtien, ghe, index) => {
                    return (tongtien += ghe.giaVe);
                  }, 0)
                  .toLocaleString()}
              </span>
            </div>
          </div>
          <hr />
          <div>Email: {userLogin.email}</div>
          <div>Phone: {userLogin.soDT}</div>

          <div>
            <button
              className="btn btn-success"
              style={{ width: "100%", marginTop: "40px" }}
              onClick={() => {
                const thongTinDatVe = new ThongTinDatVe();
                thongTinDatVe.maLichChieu = props.match.params.id;
                thongTinDatVe.danhSachVe = danhSachGheDangDat;
                thongTinDatVe.taiKhoanNguoiDung = JSON.parse(
                  localStorage.getItem(USER_LOGIN)
                ).taiKhoan;
                dispatch(datVe(thongTinDatVe));
              }}
            >
              DAT VE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function callback(key) {
  console.log(key);
}

export default function (props) {
  const {tabActive} = useSelector(state=>state.QuanLyDatVeReducer);
  const dispatch = useDispatch()
  return (
    <div className="p-5">
      <Tabs defaultActiveKey="1" activeKey={tabActive} onChange={(key)=>{
        dispatch({
          type: 'CHANGE_TAB_ACTIVE',
          number: key.toString(),
        })
      }}>
        <TabPane tab="01 CHỌN GHẾ VÀ THANH TOÁN" key="1">
          <Checkout {...props} />
        </TabPane>
        <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
          <KetQuaDatVe {...props} />
        </TabPane>
      </Tabs>
    </div>
  );
}

function KetQuaDatVe(props) {
  const {thongTinTaiKhoan} = useSelector((state)=>state.QuanLyNguoiDungReducer);
  const dispatch = useDispatch();
  const renderInfo = () => {
    return thongTinTaiKhoan.thongTinDatVe?.map((item,index)=>{
        return <tr key={index}>
        <th scope="row">{index+1}</th>
        <td>{item.tenPhim}</td>
        <td>{item.ngayDat}</td>
        <td>{item.giaVe}</td>
        <td>{item.danhSachGhe[0].tenHeThongRap}</td>
        <td>{item.danhSachGhe[0].tenRap}</td>
        <td>{item.danhSachGhe.map((item,index)=>{
          return <span key={index}> {item.tenGhe}</span>;
        })}</td>
        <td>{item.giaVe * item.danhSachGhe.length}</td>
        
      </tr>
    })
  }
  useEffect(()=>{
    dispatch(layThongTinTaiKhoanAction({
      taiKhoan: JSON.parse(localStorage.getItem(USER_LOGIN)).taiKhoan
    }))
  },[])
  console.log("Tai khoan",thongTinTaiKhoan);
  return (
    
    <div className="p-5">
      <div className="container">
        <h1 className="text-center">Lịch sử đặt vé</h1>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tên phim</th>
              <th scope="col">Ngày đặt</th>
              <th scope="col">Giá vé</th>
              <th scope="col">Hệ thống rạp</th>
              <th scope="col">Rạp</th>
              <th scope="col">Số ghế</th>
              <th scope="col">Tổng tiền</th>
            </tr>
          </thead>
          <tbody>
            {
              renderInfo()
            }
           
          </tbody>
        </table>
      </div>
    </div>
  );
}
