import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NoteToDeleteState } from "./noteToDeleteState.interface";

const initialState: NoteToDeleteState = {
    noteToDelete: {
        id: "",
        title: "",
        content: "",
        tags: [],
        updatedAt: "",
    },
};

export const noteTodeleteSlice = createSlice({
    name: "noteToDelete",
    initialState,
    reducers: {
        setNoteToDelete: (
            state,
            action: PayloadAction<NoteToDeleteState["noteToDelete"]>,
        ) => {
            state.noteToDelete = action.payload;
        },
    },
});

export const { setNoteToDelete } = noteTodeleteSlice.actions;
