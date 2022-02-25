import { quanLyDatVeService } from "../../services/QuanLyDatVeService"
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { CHUYEN_TAB, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from "../types/QuanLyDatVeType";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";



export const layChiTietPhongVeAction = (maLichChieu) => {


    return async (dispatch) => {
        try {
            const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);
            console.log(result);
            if(result.status == 200) {
                dispatch({
                    type: SET_CHI_TIET_PHONG_VE,
                    chiTietPhongVe:result.data
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const datVe = (thongTinDatVe = new ThongTinDatVe()) => {
    return async (dispatch) => {
        try {
            dispatch(displayLoadingAction)
            const result = await quanLyDatVeService.datve(thongTinDatVe);
            console.log(result);
            await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu))
            await dispatch({
                type: DAT_VE_HOAN_TAT
            })
            await dispatch(hideLoadingAction);
            dispatch({
                type: CHUYEN_TAB
            })
        } catch (error) {
            console.log(error);
            dispatch({
                type:"HIDE_LOADING"
            })
        }
    }
}