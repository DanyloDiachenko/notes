import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OpenedModalState } from "./openedPopupState.interface";
import { Modal } from "@/types/modal.type";

const initialState: OpenedModalState = {
    openedModal: "",
};

export const openedModalSlice = createSlice({
    name: "openedPopup",
    initialState,
    reducers: {
        setOpenedModal: (state, action: PayloadAction<Modal>) => {
            state.openedModal = action.payload;
        },
        closeModal: (state) => {
            state.openedModal = "";
        },
    },
});

export const { setOpenedModal, closeModal } = openedModalSlice.actions;
