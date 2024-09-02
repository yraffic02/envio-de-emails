import { IModalStates } from "@/configs/interfaces-redux";
import { createSlice } from "@reduxjs/toolkit";


const initialState: IModalStates = {
    isOpen: false
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        toggleModal(state) {
            state.isOpen = !state.isOpen;
        },
    },
});

export const { toggleModal } = modalSlice.actions;
    
export default modalSlice.reducer;