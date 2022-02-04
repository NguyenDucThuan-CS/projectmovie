import {combineReducers} from "redux"
import listMovieReducer from "../../containers/HomeTemplates/HomePage/ShowingMovie/modules/reducer";
import listTheaterReducer from "../../containers/HomeTemplates/HomePage/TheaterCluster/modules/reducer";
import theaterReducer from "../../containers/HomeTemplates/HomePage/TheaterCluster/TheaterItem/modules/reducer";
const rootReducer = combineReducers({
    listMovieReducer,
    listTheaterReducer,
    theaterReducer
});

export default rootReducer;