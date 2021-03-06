import axios from "axios";
import { DOMAIN } from "../../util/settings/config";
import { SET_CAROUSEL } from "../types/CarouselType";
import { quanLyPhimService } from "../../services/QuanLyPhimService";
export const getCarouselAction = ()=> async (dispatch) => {
    try {
        const result = await quanLyPhimService.layDanhSachBanner();

        console.log(result.data);
        dispatch({
            type: SET_CAROUSEL,
            arrImg: result.data
        })
    } catch (error) {
        console.log(error)
    }
}