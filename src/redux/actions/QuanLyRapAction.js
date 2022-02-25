import { quanLyRapService } from "../../services/QuanLyRapService"
import { SET_CHI_TIET_PHIM, SET_HE_THONG_RAP_CHIEU } from "../types/QuanLyRapType";



export const layDanhSachHeThongRapAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyRapService.layDanhSachHeThongRap();
                dispatch({
                    type: SET_HE_THONG_RAP_CHIEU,
                    heThongRapChieu: result.data
                })
            
        } catch (error) {
            
        }
    }
}

export const layThongTinChiTietPhimAction = (id) => {
    return async (dispatch) => {
        try {
            const result = await quanLyRapService.layThongTinLichChieuPhim(id);

            dispatch({
                type: SET_CHI_TIET_PHIM,
                filmDetail: result.data
            })

        } catch (error) {
            console.log(error)
        }
    }
}