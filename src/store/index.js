import {createStore, combineReducers, applyMiddleware} from "redux"
import { composeWithDevTools } from "@redux-devtools/extension"; 
// import { ourMiddleware } from "./middlewares";
import { postReducer } from "./reducers/postReducer"


import { cartReducer } from "./reducers/cartReducer"
import { userReducer } from "./reducers/userReducer";
import {thunk} from "redux-thunk";
const rootReducer  = combineReducers({
    cart:cartReducer,
    post : postReducer,
    user: userReducer,
})
export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))




// import {configureStore} from "@reduxjs/toolkit"
// import  cartReducer  from "./reducers/cartReducer"

// const rootReducer = {
//     cart: cartReducer
// }

// export const store = configureStore({
//     reducer: rootReducer,
    
// })