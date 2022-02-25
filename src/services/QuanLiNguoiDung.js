import { baseService } from "./baseService";
import { GROUPID } from "../util/settings/config";
export class QuanLyNguoiDungService extends baseService {
    constructor(){
        super();
    }

    dangNhap = (thongTinDangNhap) => {
        return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap)
    }
    
    layThongTinTaiKhoan = (taiKhoan) => {
        return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`,taiKhoan)
    }

    dangKy = (thongTin) => {
        return this.post(`/api/QuanLyNguoiDung/DangKy`,thongTin)
    }
    
}

export const quanLyNguoiDung = new QuanLyNguoiDungService()