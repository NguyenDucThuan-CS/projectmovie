import * as ActionType from "./constants";
import axios from "axios";
export const actTheater = (maHeThongRap) => {
    return (dispatch) => {
        dispatch(actTheaterRequest());
        axios({
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
            method: "GET",
        })

        .then((result)=>{
            dispatch(actTheaterSuccess(result.data))
        })

        .catch((error)=>{
            dispatch(actTheaterFailed(error))
        })
    }
}

 const actTheaterRequest = () => {
    return {
        type:ActionType.THEATER_REQUEST
    }
}

const actTheaterSuccess = (data) => {
    return {
        type: ActionType.THEATER_SUCCESS,
        payload: data
    }
}

const actTheaterFailed = (data) => {
    return {
        type: ActionType.THEATER_FAILED,
        payload: data
    }
}