import { baseService } from "./baseService";
import {ThongTinDatVe} from '../_core/models/ThongTinDatVe'
export class QuanLyDatVeService extends baseService {
    constructor(){
        super();
    }

    layChiTietPhongVe = (maLichChieu) => {
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    }

    datve = (thongTinDatVe = new ThongTinDatVe()) => {
        return this.post(`/api/QuanLyDatVe/DatVe`,thongTinDatVe)
    }
    
}

export const quanLyDatVeService = new QuanLyDatVeService()