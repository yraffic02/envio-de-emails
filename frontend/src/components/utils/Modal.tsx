import React, { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { toggleModal } from "@/store/slices/modalSlice";
import { X } from "lucide-react";



export const Modal = ({ children }: { children: ReactNode }) => {
    const { isOpen } = useSelector((state: RootState) => state.modal)
    const dispatch = useDispatch<AppDispatch>()

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 h-full bg-black  flex flex-col  items-center  z-50 modal-backdrop"
        >
            <button
                onClick={() => {
                    dispatch(toggleModal())
                }}
                className="absolute top-0 right-0 m-1 text-white font-bold p-1 rounded-full"
            >
                <X />
            </button>
            {children}
        </div>
    );
};