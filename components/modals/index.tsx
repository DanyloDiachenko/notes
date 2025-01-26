"use client";

import { closeModal } from "@/store/slices/openedModal";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { CreateNote } from "./CreateNote";

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
            {openedModal ? (
                <>
                    <div
                        className="absolute z-10 top-0 right-0 left-0 bottom-0 bg-slate-900 opacity-30 w-full h-full"
                        onClick={closeModalHandler}
                    ></div>
                    <div className="max-w-[700px] w-full absolute z-20 top-20 bg-white right-[50%] left-[50%] translate-x-[-50%] p-6">
                        <button
                            className="absolute top-2 right-3"
                            onClick={closeModalHandler}
                        >
                            x
                        </button>
                        {openedModal === "createNote" && <CreateNote />}
                    </div>
                </>
            ) : (
                ""
            )}
        </>
    );
};
