"use client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer:{
    cart:cartReducer,
    user:userReducer
  }
})

export const Providers = ({children}) => (
  <Provider store={store}>{children}</Provider>
)
