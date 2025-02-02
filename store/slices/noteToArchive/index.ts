import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NoteToArchiveState } from "./noteToArchiveState.interface";

const initialState: NoteToArchiveState = {
    noteToArchive: {
        id: "",
        title: "",
        content: "",
        tags: [],
        updatedAt: "",
    },
};

export const noteToArchiveSlice = createSlice({
    name: "noteToArchive",
    initialState,
    reducers: {
        setNoteToArchive: (
            state,
            action: PayloadAction<NoteToArchiveState["noteToArchive"]>,
        ) => {
            state.noteToArchive = action.payload;
        },
    },
});

export const { setNoteToArchive } = noteToArchiveSlice.actions;
