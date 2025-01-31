import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TagToDeleteState } from "./openedPopupState.interface";

const initialState: TagToDeleteState = {
    tagToDelete: {
        id: "",
        title: "",
        slug: "",
    },
};

export const tagTodeleteSlice = createSlice({
    name: "tagToDelete",
    initialState,
    reducers: {
        setTagToDelete: (
            state,
            action: PayloadAction<TagToDeleteState["tagToDelete"]>,
        ) => {
            state.tagToDelete = action.payload;
        },
    },
});

export const { setTagToDelete } = tagTodeleteSlice.actions;
