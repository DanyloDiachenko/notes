"use client";

import { IoArchiveOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { NoteActionsProps } from "./noteActions.props";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/types/modal.type";
import { useDispatch } from "react-redux";
import { setOpenedModal } from "@/store/slices/openedModal";

export const NoteActions = ({ note }: NoteActionsProps) => {
    const dispatch = useDispatch();

    const setOpenedModalHandler = (modalToOpen: Modal) => {
        dispatch(setOpenedModal(modalToOpen));
    };

    return (
        <div className="pl-4 pr-8">
            <Button
                className="mt-6 gap-2"
                color="purple"
                onClick={() => setOpenedModalHandler("editNote")}
            >
                <span>icon</span>
                <span>Edit Note</span>
            </Button>
            <Button
                className="mt-3 gap-2"
                color="gray"
                onClick={() => setOpenedModalHandler("confirmArchiveNote")}
            >
                <IoArchiveOutline className="size-5" />
                <span>Archive Note</span>
            </Button>
            <Button
                className="mt-3 gap-2"
                color="red"
                onClick={() => setOpenedModalHandler("confirmDeleteNote")}
            >
                <MdOutlineDelete className="size-5" />
                <span>Delete Note</span>
            </Button>
        </div>
    );
};
