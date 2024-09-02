import { configureStore } from '@reduxjs/toolkit'
import totpReducer from  './slices/totpSlice'
import modalReducer from './slices/modalSlice'

export function makeStore(){
    return configureStore({
        reducer: {
            totp: totpReducer,
            modal: modalReducer
        }
    })
}

export const store = makeStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch