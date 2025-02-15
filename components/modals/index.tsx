"use client";

import { closeModal, selectOpenedModal } from "@/store/slices/openedModal";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { IoMdClose } from "react-icons/io";
import { modals } from "./modals";
import { cn } from "@/helpers/cn";
import { useEffect, useRef } from "react";

export const Modals = () => {
    const dispatch = useAppDispatch();
    const openedModal = useAppSelector(selectOpenedModal);

    const modalRef = useRef<HTMLDivElement>(null);

    const closeModalHandler = () => {
        dispatch(closeModal());
    };

    const currentModal = modals.find((modal) => modal.key === openedModal);

    useEffect(() => {
        if (openedModal && modalRef.current) {
            modalRef.current.focus();
        }
    }, [openedModal]);

    return (
        <>
            <div
                className={cn(
                    "fixed top-0 right-0 left-0 bottom-0 bg-slate-900 w-full h-full transition-[opacity]",
                    openedModal
                        ? "opacity-30 z-40 duration-500 "
                        : "opacity-0 -z-10 duration-0",
                )}
                onClick={closeModalHandler}
                aria-hidden={!openedModal}
                tabIndex={-1}
            ></div>
            <div
                ref={modalRef}
                className={cn(
                    "max-w-[700px] w-[95%] md:w-full fixed h-[90vh] bottom-0 bg-white left-[50%] translate-x-[-50%] p-4 sm:p-6 transition-[opacity] opacity-0 top-2 md:top-10",
                    openedModal ? "z-50 opacity-100 duration-500" : "-z-10",
                )}
                role="dialog"
                aria-labelledby="modal-title"
                aria-hidden={!openedModal}
                aria-live={openedModal ? "assertive" : "off"}
                tabIndex={-1}
            >
                <button
                    className="absolute top-2 right-3"
                    onClick={closeModalHandler}
                    name="Close modal"
                    aria-label="Close modal"
                >
                    <IoMdClose />
                </button>
                {currentModal?.component}
            </div>
        </>
    );
};
