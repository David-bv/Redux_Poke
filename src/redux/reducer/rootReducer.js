import { combineReducers } from "redux-immutable";
import { pokemonReducer } from "./pokemonReducer";
import { uiReducer } from "./uiReducer";

const rootReducer = combineReducers({
    data: pokemonReducer,
    ui: uiReducer,
}) 

export default rootReducer;