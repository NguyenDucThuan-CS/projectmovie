import { baseService } from "./baseService";
import { GROUPID } from "../util/settings/config";
export class QuanLyPhimService extends baseService {
    constructor(){
        super();
    }

    layDanhSachBanner = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }

    layDanhSachPhim = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }
}

export const quanLyPhimService = new QuanLyPhimService()