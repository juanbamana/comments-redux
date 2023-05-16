import { combineReducers } from "redux";
import modalsReducer from "./modalsReducer";
import validationsReducer from "./validationsReducer";
import addComentReducer from "./addComentReducer";

export default combineReducers({

    modals: modalsReducer,
    validations: validationsReducer,
    comments: addComentReducer
})