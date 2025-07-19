import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./reducers.users";

const reducers = combineReducers({
    allProducts : productReducer,
    product : selectedProductReducer,
});

export default reducers;