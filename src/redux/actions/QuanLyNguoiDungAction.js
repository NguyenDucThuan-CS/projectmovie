import { quanLyNguoiDung } from "../../services/QuanLiNguoiDung"
import { DANG_NHAP_ACTION, GET_ACCOUNT_INFO } from "../types/QuanLyNguoiDungType";
import { history } from "../../App";
import axios from "axios";
export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
        try {
            const result = await quanLyNguoiDung.dangNhap(thongTinDangNhap);
            console.log('result', result);
            if(result.status === 200) {
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap:result.data
                })

                history.goBack();
            }
            
        } catch (error) {
            console.log(error);
        }
  }
}

export const layThongTinTaiKhoanAction = (taiKhoan) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDung.layThongTinTaiKhoan(taiKhoan);
            if(result.status === 200) {
                dispatch({
                    type: GET_ACCOUNT_INFO,
                    payload:result.data
                })

               
            }
           
        } catch (error) {
            console.log(error);
        }
    }
}

export const dangKyAction = (thongTin) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url:"https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
                method: "POST",
                data: thongTin
            });
            if(result.status === 200) {
                alert("Đăng kí thành công|")
                history.goBack();
            }
            
        } catch (error) {
            console.log(error)
        }
    }
}