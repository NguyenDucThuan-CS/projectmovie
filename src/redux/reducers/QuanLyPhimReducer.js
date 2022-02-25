import { SET_DANH_SACH_PHIM } from "../types/QuanLyPhimType"
import { SET_CHI_TIET_PHIM } from "../types/QuanLyRapType";


const stateDefault = {
    arrFilm: [
        {
            "maPhim": 9427,
            "tenPhim": "Trạng Tí Phiêu Lưu Ký 121",
            "biDanh": "trang-ti-phieu-luu-ky-121",
            "trailer": "https://youtu.be/sx1ROHCmY-4",
            "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/trang-ti-phieu-luu-ky-121_gp01.png",
            "moTa": "Trạng tí phiêu lưu ký là một bộ phim do người Việt sản xuất",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2022-01-25T13:57:40.603",
            "danhGia": 10
        }
    ],
    filmDetail: {}
}

export const QuanLyPhimReducer = (state=stateDefault, action) => {
    switch(action.type) {
        case SET_DANH_SACH_PHIM: 
            state.arrFilm = action.arrFilm;
            return {...state}
        case SET_CHI_TIET_PHIM:
            state.filmDetail = action.filmDetail;
            return {...state}
        
        default:
            return {...state}
    }
}