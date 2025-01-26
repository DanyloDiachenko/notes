"use client";

import { Button } from "@/components/ui/Button";
import { setOpenedModal } from "@/store/slices/openedModal";
import { FiPlus } from "react-icons/fi";
import { useDispatch } from "react-redux";

export const AddTag = () => {
    const dispatch = useDispatch();

    const onAddTagButtonClick = () => {
        dispatch(setOpenedModal("createTag"));
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
