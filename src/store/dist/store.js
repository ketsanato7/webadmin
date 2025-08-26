"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var reducers_1 = require("../reducers/reducers");
var store = redux_1.createStore(reducers_1["default"], {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
exports["default"] = store;
