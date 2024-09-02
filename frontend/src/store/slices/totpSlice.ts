import { ITotpStates } from "@/configs/interfaces-redux";
import { createSlice } from "@reduxjs/toolkit";
import { toggleUserTotp, verifyIfIsTotp } from "../actions/totpAcitons";

const initialState: ITotpStates = {
  isTotpEnabled: false,
  loading: false,
  image: null,
  manualInfo: {
    accountName: null,
    secret: null
  },
  error: null
};
  
const totpSlice = createSlice({
  name: "totp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(verifyIfIsTotp.pending, (state)=> {
      state.loading = true,
      state.error = null
    })
    .addCase(verifyIfIsTotp.fulfilled, (state, action)=>{
      state.isTotpEnabled = action.payload.totp
      state.loading = false 
    })
    .addCase(verifyIfIsTotp.rejected, (state, action) =>{
      state.error = String(action.payload)
      state.loading = false
    })
    .addCase(toggleUserTotp.pending, (state)=> {
      state.loading = true,
      state.error = null
    })
    .addCase(toggleUserTotp.fulfilled, (state, action)=> {
      if(typeof action.payload === 'boolean'){
        state.isTotpEnabled = action.payload
        state.loading = false 
      }
      if(typeof action.payload.qrcode){
        state.image = action.payload.qrcode
        state.manualInfo = action.payload.manualInfo
        state.loading = false 
      }
    })
    .addCase(toggleUserTotp.rejected, (state, action) =>{
      state.error = String(action.payload)
      state.loading = false
    })
    ;
  },
});
  
export default totpSlice.reducer;
  