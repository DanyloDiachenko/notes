import { configureStore } from "@reduxjs/toolkit";
import { openedModalSlice } from "./slices/openedModal";

export const store = configureStore({
    reducer: {
        openedModal: openedModalSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
