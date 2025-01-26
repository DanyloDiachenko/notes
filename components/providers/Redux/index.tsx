"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import { ReduxProviderProps } from "./reduxProvider.props";

export const ReduxProvider = ({ children }: ReduxProviderProps) => {
    return <Provider store={store}>{children}</Provider>;
};
