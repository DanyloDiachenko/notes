"use client";

import { IoArchiveOutline } from "react-icons/io5";
import { MdOutlineDelete, MdOutlineModeEditOutline } from "react-icons/md";
import { NoteActionsProps } from "./noteActions.props";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/types/modal.enum";
import { setOpenedModal } from "@/store/slices/openedModal";
import { useAppDispatch } from "@/store/store";
import { setNote } from "@/store/slices/note";

export const NoteActions = ({ note, noteType }: NoteActionsProps) => {
    const dispatch = useAppDispatch();

    const setOpenedModalHandler = (modalToOpen: Modal) => {
        dispatch(setOpenedModal(modalToOpen));
    };

    const onEditNoteClick = () => {
        setOpenedModalHandler(Modal.EditNote);
        dispatch(setNote(note));
    };

    const onDeleteNoteClick = () => {
        setOpenedModalHandler(Modal.ConfirmDeleteNote);
        dispatch(setNote(note));
    };

    const onArchiveNoteClick = () => {
        setOpenedModalHandler(Modal.ConfirmArchiveNote);
        dispatch(setNote(note));
    };

    const onUnarchiveNoteClick = () => {
        setOpenedModalHandler(Modal.ConfirmUnarchiveNote);
        dispatch(setNote(note));
    };

    return (
        <div className="pl-4 pr-8">
            <Button
                className="mt-6 gap-2"
                color="purple"
                onClick={onEditNoteClick}
            >
                <MdOutlineModeEditOutline className="size-5" />
                <span>Edit Note</span>
            </Button>
            <Button
                className="mt-3 gap-2"
                color="gray"
                onClick={
                    noteType === "all"
                        ? () => onArchiveNoteClick()
                        : () => onUnarchiveNoteClick()
                }
            >
                <IoArchiveOutline className="size-5" />
                <span>{noteType === "all" ? "Archive" : "Unarchive"} Note</span>
            </Button>
            <Button
                className="mt-3 gap-2"
                color="red"
                onClick={onDeleteNoteClick}
            >
                <MdOutlineDelete className="size-5" />
                <span>Delete Note</span>
            </Button>
        </div>
    );
};
