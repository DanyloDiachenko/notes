import { configureStore } from "@reduxjs/toolkit";
import { openedModalSlice } from "./slices/openedModal";
import { tagToEditSlice } from "./slices/tagToEdit";
import { tagTodeleteSlice } from "./slices/tagToDelete";
import { noteToEditSlice } from "./slices/noteToEdit";

export const store = configureStore({
    reducer: {
        openedModal: openedModalSlice.reducer,
        tagToEdit: tagToEditSlice.reducer,
        tagToDelete: tagTodeleteSlice.reducer,
        noteToEdit: noteToEditSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
