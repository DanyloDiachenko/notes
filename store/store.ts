import { configureStore } from "@reduxjs/toolkit";
import { openedModalSlice } from "./slices/openedModal";
import { tagToEditSlice } from "./slices/tagToEdit";
import { tagTodeleteSlice } from "./slices/tagToDelete";
import { noteToEditSlice } from "./slices/noteToEdit";
import { noteTodeleteSlice } from "./slices/noteToDelete";
import { noteToArchiveSlice } from "./slices/noteToArchive";

export const store = configureStore({
    reducer: {
        openedModal: openedModalSlice.reducer,
        tagToEdit: tagToEditSlice.reducer,
        tagToDelete: tagTodeleteSlice.reducer,
        noteToEdit: noteToEditSlice.reducer,
        noteToDelete: noteTodeleteSlice.reducer,
        noteToArchive: noteToArchiveSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
