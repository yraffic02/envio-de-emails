import { api } from "@/lib/api";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const verifyIfIsTotp = createAsyncThunk(
    "totp/verifyIfIsTotp",
    async (_, thunkApi) => {
      try {
        const {data} = await api.get('/totp/verifyIfUserHasTotp');
  
        return data
      } catch (error: any) {
        return thunkApi.rejectWithValue(
          "Erro ao verificar se usuário tem totp"
        );
      }
    }
);

export const toggleUserTotp = createAsyncThunk(
  "totp/toggleUserTotp",
  async (_, thunkApi) => {
    try {
      const resultAction = await thunkApi.dispatch(verifyIfIsTotp());

      if (verifyIfIsTotp.rejected.match(resultAction)) {
        return thunkApi.rejectWithValue("Erro ao verificar se usuário tem totp");
      }

      const hasTotp = resultAction.payload;

      if(hasTotp.isRegistered){
        const {data} = await api.get('/totp/toggleUserTotp');
 
        return data.totp
      }
      
      const {data} = await api.post('/totp/generateQrCode');
        console.log(data);
        
      return data
    } catch (error: any) {
      return thunkApi.rejectWithValue(
        "Erro ao buscar logs"
      );
    }
  }
);