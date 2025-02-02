import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NoteToUnarchiveState } from "./noteToUnarchiveState.interface";

const initialState: NoteToUnarchiveState = {
    noteToUnarchive: {
        id: "",
        title: "",
        content: "",
        tags: [],
        updatedAt: "",
    },
};

export const noteToUnarchiveSlice = createSlice({
    name: "noteToUnarchive",
    initialState,
    reducers: {
        setNoteToUnarchive: (
            state,
            action: PayloadAction<NoteToUnarchiveState["noteToUnarchive"]>,
        ) => {
            state.noteToUnarchive = action.payload;
        },
    },
});

export const { setNoteToUnarchive } = noteToUnarchiveSlice.actions;
