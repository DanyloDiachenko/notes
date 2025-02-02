"use client";

import { IoArchiveOutline } from "react-icons/io5";
import { MdOutlineDelete, MdOutlineModeEditOutline } from "react-icons/md";
import { NoteActionsProps } from "./noteActions.props";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/types/modal.type";
import { useDispatch } from "react-redux";
import { setOpenedModal } from "@/store/slices/openedModal";
import { setNoteToEdit } from "@/store/slices/noteToEdit";
import { setNoteToDelete } from "@/store/slices/noteToDelete";
import { setNoteToArchive } from "@/store/slices/noteToArchive";
import { setNoteToUnarchive } from "@/store/slices/noteToUnarchive";

export const NoteActions = ({ note, noteType }: NoteActionsProps) => {
    const dispatch = useDispatch();

    const setOpenedModalHandler = (modalToOpen: Modal) => {
        dispatch(setOpenedModal(modalToOpen));
    };

    const setNoteToEditHandler = () => {
        dispatch(setNoteToEdit(note));
    };

    const setNoteToDeleteHandler = () => {
        dispatch(setNoteToDelete(note));
    };

    const setNoteToArchiveHandler = () => {
        dispatch(setNoteToArchive(note));
    };

    const setNoteToUnarchiveHandler = () => {
        dispatch(setNoteToUnarchive(note));
    };

    const onEditNoteClick = () => {
        setOpenedModalHandler("editNote");
        setNoteToEditHandler();
    };

    const onDeleteNoteClick = () => {
        setOpenedModalHandler("confirmDeleteNote");
        setNoteToDeleteHandler();
    };

    const onArchiveNoteClick = () => {
        setOpenedModalHandler("confirmArchiveNote");
        setNoteToArchiveHandler();
    };

    const onUnarchiveNoteClick = () => {
        setOpenedModalHandler("confirmUnarchiveNote");
        setNoteToUnarchiveHandler();
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
