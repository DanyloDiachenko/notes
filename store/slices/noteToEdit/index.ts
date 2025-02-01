import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NoteToEditState } from "./noteToEditState.interface";

const initialState: NoteToEditState = {
    noteToEdit: {
        id: "",
        title: "",
        content: "",
        tags: [],
        updatedAt: "",
    },
};

export const noteToEditSlice = createSlice({
    name: "noteToEdit",
    initialState,
    reducers: {
        setNoteToEdit: (
            state,
            action: PayloadAction<NoteToEditState["noteToEdit"]>,
        ) => {
            state.noteToEdit = action.payload;
        },
    },
});

export const { setNoteToEdit } = noteToEditSlice.actions;
