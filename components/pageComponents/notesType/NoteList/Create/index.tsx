"use client";

import { Button } from "@/components/ui/Button";
import { setOpenedModal } from "@/store/slices/openedModal";
import { FiPlus } from "react-icons/fi";
import { useDispatch } from "react-redux";

export const CreateNote = () => {
    const dispatch = useDispatch();

    const onCreateNewNoteClick = () => {
        dispatch(setOpenedModal("createNote"));
    };

    return (
        <Button
            className="gap-2 p-2 py-3"
            color="purple"
            onClick={onCreateNewNoteClick}
        >
            <FiPlus />
            <span>Create New Note</span>
        </Button>
    );
};
