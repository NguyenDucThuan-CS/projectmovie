import * as ActionType from './constants'
import axios from 'axios'
export const actListTheater = () => {
    return (dispatch) => {
        dispatch(actListTheaterRequest());
        axios({
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
            method: "GET",
        })
        .then((result)=>{
            dispatch(actListTheaterSuccess(result.data))
        })

        .catch((err)=>{
            dispatch(actListTheaterFailed(err));
        })
    }
}

const actListTheaterRequest = () => {
    return {
        type: ActionType.LIST_THEATER_REQUEST,
    }
}

const actListTheaterSuccess = (data) => {
    return {
        type: ActionType.LIST_THEATER_SUCCESS,
        payload: data
    }
}

const actListTheaterFailed = (data) => {
    return {
        type: ActionType.LIST_THEATER_FAILED,
        payload: data,
    }
}