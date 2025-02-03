import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TagState } from "./tagState.interface";

const initialState: TagState = {
    tag: null,
};

export const tagSlice = createSlice({
    name: "tag",
    initialState,
    reducers: {
        setTag: (state, action: PayloadAction<TagState["tag"]>) => {
            state.tag = action.payload;
        },
    },
});

export const { setTag } = tagSlice.actions;

export const selectTag = (state: { tag: TagState }) => state.tag.tag;
