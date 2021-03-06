import { CHUYEN_TAB, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from "../types/QuanLyDatVeType"
import { DAT_VE } from "../types/QuanLyDatVeType";


const stateDefault = {
    chiTietPhongVe: {

    },
    danhSachGheDangDat: [
        /* {
          maGhe: 47417,
          tenGhe: "17",
          maRap: 451,
          loaiGhe: "Thuong",
          stt: "17",
          giaVe: 75000,
          daDat: false,
          taiKhoanNguoiDat: null,
        } */
    ],
    danhSachGheKhachDat: [{maGhe:48141},{maGhe:48042}],
    tabActive: "1"
}

export const QuanLyDatVeReducer = (state=stateDefault,action) => {
    switch (action.type) {
        
        case SET_CHI_TIET_PHONG_VE:
            state.chiTietPhongVe = action.chiTietPhongVe;
            return {...state}
        case DAT_VE:
            let danhSachGheCapNhat = [...state.danhSachGheDangDat];
            let index = danhSachGheCapNhat.findIndex((ghe) => {
            return ghe.maGhe === action.gheDuocChon.maGhe;
            });
          
            if (index != -1) {
                  danhSachGheCapNhat.splice(index, 1);
            } else {
                  danhSachGheCapNhat.push(action.gheDuocChon);
            }
            return { ...state,danhSachGheDangDat:danhSachGheCapNhat };
        case DAT_VE_HOAN_TAT:
            state.danhSachGheDangDat = []
            return {...state}
        case CHUYEN_TAB:
            state.tabActive = "2"
            return {...state}
        case 'CHANGE_TAB_ACTIVE':
            state.tabActive = action.number
            return {...state}

        default:
            return {...state}
    }
}