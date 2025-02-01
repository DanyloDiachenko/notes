"use client";

import { Button } from "@/components/ui/Button";
import { Modal } from "@/types/modal.type";
import { setOpenedModal } from "@/store/slices/openedModal";
import { useDispatch } from "react-redux";
import { MdOutlineDelete, MdOutlineModeEditOutline } from "react-icons/md";
import { ActionsProps } from "./actions.props";
import { Tag } from "@/types/tag.interface";
import { setTagToEdit } from "@/store/slices/tagToEdit";
import { setTagToDelete } from "@/store/slices/tagToDelete";

export const Actions = ({ tag }: ActionsProps) => {
    const dispatch = useDispatch();

    const setOpenedModalHandler = (modalToOpen: Modal) => {
        dispatch(setOpenedModal(modalToOpen));
    };

    const setTagToEditHandler = (tag: Tag) => {
        dispatch(setTagToEdit(tag));
    };

    const setTagToDeleteHandler = (tag: Tag) => {
        dispatch(setTagToDelete(tag));
    };

    const onEditClick = () => {
        setOpenedModalHandler("editTag");
        setTagToEditHandler(tag);
    };

    const onDeleteClick = () => {
        setOpenedModalHandler("confirmDeleteTag");
        setTagToDeleteHandler(tag);
    };

    return (
        <div className="flex items-center gap-2">
            <Button
                color="gray"
                className="p-0"
                onClick={onEditClick}
                aria-label="Edit tag"
            >
                <MdOutlineModeEditOutline className="size-6 p-1" />
            </Button>
            <Button
                color="red"
                className="p-0 px-0"
                onClick={onDeleteClick}
                aria-label="Delete tag"
            >
                <MdOutlineDelete className="size-6 p-1" />
            </Button>
        </div>
    );
};
