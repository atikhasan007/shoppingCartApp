// import {createStore, combineReducers} from "redux"
// import { composeWithDevTools } from "@redux-devtools/extension"; 
// // ✅ This is correct



// import { cartReducer } from "./reducers/cartReducer"
// const rootReducer  = combineReducers({
//     cart:cartReducer,
// })


// export const store = createStore(rootReducer,composeWithDevTools())




import {configureStore} from "@reduxjs/toolkit"
import  cartReducer  from "./reducers/cartReducer"

const rootReducer = {
    cart: cartReducer
}

export const store = configureStore({
    reducer: rootReducer,
    
})