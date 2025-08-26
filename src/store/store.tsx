import { createStore } from "redux";
import reducers from "../reducers/reducers"
import personal_info from "./1.personal_info copy"

const store = createStore(reducers, {
},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );


export default store;