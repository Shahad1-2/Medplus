import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name:"user",
  initialState:{
    loggedIn:false,
    user:null,
    token:null
  },
  reducers:{
    loginSuccess:(state,action)=>{
      state.loggedIn=true;
      state.user=action.payload.user;
      state.token=action.payload.token;
    },
    logout:(state)=>{
      state.loggedIn=false;
      state.user=null;
      state.token=null;
    }
  }
})

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;
