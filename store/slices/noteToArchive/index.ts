import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NoteState } from "./noteState.interface";

const initialState: NoteState = {
    note: null,
};

export const noteSlice = createSlice({
    name: "note",
    initialState,
    reducers: {
        setNote: (state, action: PayloadAction<NoteState["note"]>) => {
            state.note = action.payload;
        },
    },
});

export const { setNote } = noteSlice.actions;

export const selectNote = (state: { note: NoteState }) => state.note.note;
