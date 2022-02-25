import React from "react";
import "./style.css";
import { Tabs, Radio } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { SET_CHI_TIET_PHIM } from "../../redux/types/QuanLyRapType";
import { layThongTinChiTietPhimAction } from "../../redux/actions/QuanLyRapAction";
import { NavLink } from "react-router-dom";
import moment from "moment"
const { TabPane } = Tabs;
export default function Detail(props) {
  const filmDetail = useSelector((state) => state.QuanLyPhimReducer.filmDetail);
  const dispatch = useDispatch();
  console.log(filmDetail);
  useEffect(() => {
    let { id } = props.match.params;
    dispatch(layThongTinChiTietPhimAction(id));
  }, []);

  return (
    <section className="detail__movie">
      <div className="container detail__movie__container">
        <div className="row">
          <div className="col-4 detail_movie_left">
            <div className="img_detail_movie">
              <img src={filmDetail.hinhAnh} />
            </div>
            <div className="press_button">
              <button style={{ marginRight: "15px" }}>Booking</button>
              <button>Trailer</button>
            </div>
          </div>
          <div className="col-8 detail_movie_right">
            <h1 style={{ color: "white" }}>{filmDetail.tenPhim}</h1>
            <span>2D Digital</span>
            <p>
              <span>Nội dung phim:</span> {filmDetail.moTa}
            </p>

            <p>
              <span>Đánh giá:</span>
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </p>
          </div>
        </div>
        <div className="movie__calendar" style={{color:'white', backgroundColor: 'white', marginTop:'20px', height: "600px"}}>
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Lịch chiếu" key="1" style={{color:'white'}}>
            <Tabs
            tabPosition="left"
            style={{
              color: "black",
              backgroundColor: "white",
              borderRadius: "5px",
              padding: "20px",
            }}
          >
            {filmDetail.heThongRapChieu?.map((htr, index) => {
              return (
                <TabPane
                  tab={<div><img src={htr.logo} style={{width:'50px', height:'50px', marginRight:'20px'}}/>{htr.tenHeThongRap}</div>}
                  key={index}
                >
                {
                  htr.cumRapChieu?.map((cumRap,index)=>{
                    return <div key={index} style={{marginBottom: '20px'}}>
                     <div className="d-flex" style={{marginBottom:'20px'}}>
                        <img src="https://picsum.photos/200/300" style={{width:"50px", height:"50px", marginRight:"15px"}}/>
                        <div style={{color:'green'}}>
                          {cumRap.tenCumRap}
                        </div>
                     </div>
                     <div className="thong-tin-lich-chieu-phim">
                       <div className="row">
                         {cumRap.lichChieuPhim?.splice(0,4).map((lichChieu,index)=>{
                           return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index} className="col-3" style={{color:"green",fontWeight:"bold"}}>{moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}</NavLink>
                         })}
                         
                       </div>
                     </div>
                    </div>
                  })
                }
                </TabPane>
              );
            })}
          </Tabs>
            </TabPane>
            <TabPane tab="Thông tin" key="2" style={{color:'white'}}>
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Đánh giá" key="3" style={{color:'white'}}>
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        

         
        </div>
      </div>
    </section>
  );
}
