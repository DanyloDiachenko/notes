import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchNoteState } from "./searchNoteState.interface";

const initialState: SearchNoteState = {
    search: "",
};

export const searchNoteSlice = createSlice({
    name: "searchNote",
    initialState,
    reducers: {
        setSearchNote: (
            state,
            action: PayloadAction<SearchNoteState["search"]>,
        ) => {
            state.search = action.payload;
        },
    },
});

export const { setSearchNote } = searchNoteSlice.actions;

export const selectSearchNote = (state: { searchNote: SearchNoteState }) =>
    state.searchNote.search;
