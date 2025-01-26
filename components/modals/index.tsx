"use client";

import { closeModal } from "@/store/slices/openedModal";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { CreateNote } from "./CreateNote";
import { EditNote } from "./EditNote";
import { ConfirmArchiveNote } from "./ArchiveNote";
import { ConfirmDeleteNote } from "./DeleteNote";

export const Modals = () => {
    const dispatch = useDispatch();
    const openedModal = useSelector(
        (state: RootState) => state.openedModal.openedModal,
    );

    const closeModalHandler = () => {
        dispatch(closeModal());
    };

    return (
        <>
            <div
                className={`fixed top-0 right-0 left-0 bottom-0 bg-slate-900 w-full h-full transition-[opacity]  ${
                    openedModal
                        ? "opacity-30 z-10 duration-500 "
                        : "opacity-0 -z-10 duration-0"
                }`}
                onClick={closeModalHandler}
            ></div>
            <div
                className={`max-w-[700px] w-full absolute bg-white right-[50%] left-[50%] translate-x-[-50%]
                    p-6 transition-[opacity] ${
                        openedModal
                            ? "top-20 z-20 opacity-100 duration-500"
                            : "-z-10 opacity-0 duration-0"
                    }`}
            >
                <button
                    className="absolute top-2 right-3"
                    onClick={closeModalHandler}
                >
                    x
                </button>
                {openedModal === "createNote" && <CreateNote />}
                {openedModal === "editNote" && <EditNote />}
                {openedModal === "confirmArchiveNote" && <ConfirmArchiveNote />}
                {openedModal === "confirmDeleteNote" && <ConfirmDeleteNote />}
            </div>
        </>
    );
};
