import React, { useState } from "react";
import { Tabs, Radio, Space } from "antd";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";
const { TabPane } = Tabs;

export default function HomeMenu(props) {
  const [state, setState] = useState({ tabPosition: "left" });
  const changeTabPosition = (e) => {
    setState({ tabPosition: e.target.value });
  };
  console.log(props.heThongRapChieu);
  const { tabPosition } = state;
  const renderHeThongRap = () => {
    return props.heThongRapChieu?.map((item, index) => {
      return (
        <TabPane
          tab={
            <img
              src={item.logo}
              className="rounded-circle"
              style={{ width: "50px", height: "50px" }}
            />
          }
          key={index}
        >
          <Tabs tabPosition={tabPosition}>
            {item.lstCumRap.map((cumrap, index) => {
              return (
                <TabPane
                  tab={
                    <div >
                      <img
                      src={item.logo}
                      className="rounded-circle"
                      style={{ width: "50px", height: "50px",marginRight: '20px'}}
                    />
                    {cumrap.tenCumRap}
                    </div>
                    
                  }
                  key={index}
                >
                  {cumrap.danhSachPhim.map((phim,index)=>{
                     
                     return <Fragment key={index}>
                       <div  >
                        <div style={{display:'flex'}}>
                          <img src={phim.hinhAnh} alt={phim.tenPhim} style={{width: '100px',height:'100px'}} onError={(e)=>{
                              e.target.onerror = null;e.target.src="https://picsum.photos/75/75"
                          }}/>
                          <div style={{padding: '20px'}}>
                            <h6 style={{color: 'green'}}>{phim.tenPhim}</h6>
                            <div>{cumrap.diaChi}</div>
                            {
                              phim.lstLichChieuTheoPhim?.splice(0,10).map((lichchieu,index)=>{ 
                                return <NavLink to={`/checkout/${lichchieu.maLichChieu}`} style={{marginRight:"10px"}} key={index}>
                                  {moment(lichchieu.ngayChieuGioChieu).format('hh:mm A')}
                                </NavLink>
                              })
                            }
                          </div>
                        </div>
                        
                      </div>
                      <hr />
                      </Fragment> 
                     
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };
  return (
    <div className="container">
      <h2>LỊCH CHIẾU</h2>
      <Tabs tabPosition={tabPosition} className="container" >{renderHeThongRap()}</Tabs>
    </div>
  );
}
