"use client";

import { deleteTag } from "@/api/tags";
import { Button } from "@/components/ui/Button";
import { closeModal } from "@/store/slices/openedModal";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export const ConfirmDeleteTag = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const closeModalHandler = () => {
        dispatch(closeModal());
    };

    const tagToDelete = useSelector(
        (state: RootState) => state.tagToDelete.tagToDelete,
    );

    const onDeleteTagSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const deleteTagResponse = await deleteTag(tagToDelete.id);

            if (deleteTagResponse.message) {
                toast.error(deleteTagResponse.message);
                return;
            }

            toast.success("Tag deleted successfuly");

            closeModalHandler();
            router.refresh();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="relative">
            <div className="text-3xl font-bold mt-6 text-center">
                Delete Tag
            </div>
            <div className="text-lg mt-10">
                Are you sure want to delete tag:
            </div>
            <div className="font-semibold text-xl">{tagToDelete.title}</div>
            <div className="gap-2 mt-10 grid grid-cols-[150px_150px]">
                <Button color="purple" onClick={onDeleteTagSubmit}>
                    Sumbit
                </Button>
                <Button color="red" onClick={closeModalHandler}>
                    Discard
                </Button>
            </div>
        </div>
    );
};
