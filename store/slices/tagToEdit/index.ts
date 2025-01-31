import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TagToEditState } from "./openedPopupState.interface";

const initialState: TagToEditState = {
    tagToEdit: {
        id: "",
        title: "",
        slug: "",
    },
};

export const tagToEditSlice = createSlice({
    name: "tagToEdit",
    initialState,
    reducers: {
        setTagToEdit: (
            state,
            action: PayloadAction<TagToEditState["tagToEdit"]>,
        ) => {
            state.tagToEdit = action.payload;
        },
    },
});

export const { setTagToEdit } = tagToEditSlice.actions;
