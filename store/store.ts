import { configureStore } from "@reduxjs/toolkit";
import { openedModalSlice } from "./slices/openedModal";
import { searchNoteSlice } from "./slices/searchNote";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { noteSlice } from "./slices/noteToArchive";
import { tagSlice } from "./slices/tagToDelete";

export const store = configureStore({
    reducer: {
        openedModal: openedModalSlice.reducer,
        tag: tagSlice.reducer,
        note: noteSlice.reducer,
        searchNote: searchNoteSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
