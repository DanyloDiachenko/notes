"use client";

import { Button } from "@/components/ui/Button";
import { setOpenedModal } from "@/store/slices/openedModal";
import { useAppDispatch } from "@/store/store";
import { Modal } from "@/types/modal.enum";
import { FiPlus } from "react-icons/fi";

export const CreateNote = () => {
    const dispatch = useAppDispatch();

    const onCreateNewNoteClick = () => {
        dispatch(setOpenedModal(Modal.CreateNote));
    };

    return (
        <Button
            className="gap-2 p-2 py-3"
            color="purple"
            onClick={onCreateNewNoteClick}
        >
            <FiPlus className="size-5" />
            <span>Create New Note</span>
        </Button>
    );
};
