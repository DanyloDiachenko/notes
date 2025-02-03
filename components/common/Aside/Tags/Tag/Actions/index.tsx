"use client";

import { Button } from "@/components/ui/Button";
import { Modal } from "@/types/modal.enum";
import { setOpenedModal } from "@/store/slices/openedModal";
import { MdOutlineDelete, MdOutlineModeEditOutline } from "react-icons/md";
import { ActionsProps } from "./actions.props";
import { useAppDispatch } from "@/store/store";
import { setTag } from "@/store/slices/tagToDelete";

export const Actions = ({ tag }: ActionsProps) => {
    const dispatch = useAppDispatch();

    const onEditClick = () => {
        dispatch(setOpenedModal(Modal.EditTag));
        dispatch(setTag(tag));
    };

    const onDeleteClick = () => {
        dispatch(setOpenedModal(Modal.ConfirmDeleteTag));
        dispatch(setTag(tag));
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
