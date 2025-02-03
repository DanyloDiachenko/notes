"use client";

import { Button } from "@/components/ui/Button";
import { setOpenedModal } from "@/store/slices/openedModal";
import { useAppDispatch } from "@/store/store";
import { Modal } from "@/types/modal.enum";
import { FiPlus } from "react-icons/fi";

export const AddTag = () => {
    const dispatch = useAppDispatch();

    const onAddTagButtonClick = () => {
        dispatch(setOpenedModal(Modal.CreateTag));
    };

    return (
        <Button
            color="purple"
            className="mt-6 py-2 gap-2"
            onClick={onAddTagButtonClick}
        >
            <FiPlus className="size-5" />
            <span>Add Tag</span>
        </Button>
    );
};
