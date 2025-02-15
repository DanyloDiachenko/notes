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
        <div className="xl:pl-4 xl:pr-8 sm:p-4 p-2 fixed right-0 flex sm:block items-center gap-2 bottom-0 sm:static">
            <Button
                className="xl:mt-4 gap-2 xl:w-full h-auto aspect-square xl:aspect-auto sm:p-0 sm:py-3"
                color="purple"
                onClick={onEditNoteClick}
                name="Edit Note"
                aria-label="Edit Note"
            >
                <MdOutlineModeEditOutline className="size-5" />
                <span className="hidden xl:block">Edit Note</span>
            </Button>
            <Button
                className="sm:mt-3 gap-2 h-auto aspect-square xl:aspect-auto xl:w-full sm:p-0 sm:py-3"
                color="gray"
                onClick={
                    noteType === "all"
                        ? () => onArchiveNoteClick()
                        : () => onUnarchiveNoteClick()
                }
                name={noteType === "all" ? "Archive Note" : "Unarchive Note"}
                aria-label={noteType === "all" ? "Archive Note" : "Unarchive Note"}
            >
                <IoArchiveOutline className="size-5" />
                <span className="hidden xl:block">
                    {noteType === "all" ? "Archive" : "Unarchive"} Note
                </span>
            </Button>
            <Button
                className="sm:mt-3 gap-2 h-auto aspect-square xl:aspect-auto xl:w-full sm:p-0 sm:py-3"
                color="red"
                onClick={onDeleteNoteClick}
                name="Delete Note"
                aria-label="Delete Note"
            >
                <MdOutlineDelete className="size-5" />
                <span className="hidden xl:block">Delete Note</span>
            </Button>
        </div>
    );
};
