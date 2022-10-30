import { createStore } from "redux";
import logger from "redux-logger";
import { applyMiddleware } from "redux";
import initialState from "./initialState";
import { rootReducer } from "./rootReducer";
import thunkMiddleware from "redux-thunk";


// const myFunc = function(store){
//     return function(next){
//         return function(action){
//             console.log("sate beafore",store.getState())
//             console.log("action",action);
//             next(action)
//             console.log("state afteree",store.getState())
//         }
//     }
// }

const store = createStore(rootReducer, initialState , applyMiddleware(logger,thunkMiddleware));

export default store;
