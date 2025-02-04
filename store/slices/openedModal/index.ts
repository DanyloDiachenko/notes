import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OpenedModalState } from "./openedModalState.interface";
import { Modal } from "@/types/modal.enum";

const initialState: OpenedModalState = {
    openedModal: Modal.None,
};

export const openedModalSlice = createSlice({
    name: "openedModal",
    initialState,
    reducers: {
        setOpenedModal: (state, action: PayloadAction<Modal>) => {
            state.openedModal = action.payload;
        },
        closeModal: (state) => {
            state.openedModal = Modal.None;
        },
    },
});

export const { setOpenedModal, closeModal } = openedModalSlice.actions;

export const selectOpenedModal = (state: { openedModal: OpenedModalState }) =>
    state.openedModal.openedModal;
