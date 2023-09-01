import { configureStore } from "@reduxjs/toolkit";
import CartReducer from '../Redux/Features/Cart/CartSlice';  //cartslice.js içerisinden default export ne ise getir onu cartreducer içine koy

export const store = configureStore({
    reducer: {
        cart: CartReducer
    }
})