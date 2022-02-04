import *  as ActionType from "./constants" ;
import axios from "axios";


export const actLitsMovie = () => {
        return (dispatch) => {
            dispatch(actListMovieRequest());
            axios({
                url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02",
                method: "GET",
            })

            .then((result) => {
                dispatch(actListMovieSuccess(result.data));
            })

            .catch((error)=>{
                dispatch(actListMovieFailed(error));
            })
        }
}


const actListMovieRequest = () => {
    return {
        type: ActionType.LIST_MOVIE_REQUEST
    }
}

const actListMovieSuccess = (data) => {
    return {
        type: ActionType.LIST_MOVIE_SUCCESS,
        payload: data
    }
}

const actListMovieFailed = (err) => {
    return {
        type: ActionType.LIST_MOVIE_FAILED,
        payload: err,
    }
}