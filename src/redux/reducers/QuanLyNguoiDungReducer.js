import { USER_LOGIN } from "../../util/settings/config";
import { TOKEN } from "../../util/settings/config";

import { DANG_NHAP_ACTION, GET_ACCOUNT_INFO } from "../types/QuanLyNguoiDungType"



let user = {}
if(localStorage.getItem('USER_LOGIN')) {
    user = JSON.parse(localStorage.getItem('USER_LOGIN'));
}
const stateDefault = {
    userLogin: user,
    thongTinTaiKhoan: {}
}

export const QuanLyNguoiDungReducer = (state=stateDefault,action) => {
    switch(action.type) {
        case DANG_NHAP_ACTION:
            const {thongTinDangNhap} = action;
            localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
            localStorage.setItem(TOKEN,thongTinDangNhap.accessToken);
            return {...state,userLogin:thongTinDangNhap}
        case GET_ACCOUNT_INFO:
            state.thongTinTaiKhoan = action.payload
            return {...state}
        case "DANG_XUAT":
            localStorage.removeItem(USER_LOGIN)
            state.userLogin = {}
            return {...state}
        default:
            return {...state}
    }
}