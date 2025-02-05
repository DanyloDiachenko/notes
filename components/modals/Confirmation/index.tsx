"use client";

import { updateNote, deleteNote } from "@/api/notes.api";
import { deleteTag } from "@/api/tags.api";
import { Button } from "@/components/ui/Button";
import { closeModal } from "@/store/slices/openedModal";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useParams, useRouter } from "next/navigation";
import { FormEvent } from "react";
import { toast } from "react-toastify";
import { ConfirmationProps } from "./Confirmation.props";
import { selectNote } from "@/store/slices/note";
import { getTitle } from "./getTitle";
import { getMessage } from "./getMessage";
import { selectTag } from "@/store/slices/tag";

export const Confirmation = ({ type }: ConfirmationProps) => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const params = useParams();

    const closeModalHandler = () => {
        dispatch(closeModal());
    };

    const note = useAppSelector(selectNote);
    const tag = useAppSelector(selectTag);

    const onSubmitClick = async (e: FormEvent) => {
        e.preventDefault();

        try {
            let response;

            switch (type) {
                case "archiveNote":
                    if (!note) return;

                    response = await updateNote(note.id, { isArchived: true });

                    break;
                case "unarchiveNote":
                    if (!note) return;

                    response = await updateNote(note.id, {
                        isArchived: false,
                    });

                    break;
                case "deleteNote":
                    if (!note) return;

                    response = await deleteNote(note.id);
                    break;
                case "deleteTag":
                    if (!tag) return;

                    response = await deleteTag(tag.id);
                    break;
            }

            if ("message" in response) {
                toast.error(response.message);
                return;
            }

            toast.success(
                type === "deleteNote" || type === "deleteTag"
                    ? "Deleted successfully"
                    : "Updated successfully",
            );

            closeModalHandler();
            router.push(`/${params.type}`);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="relative">
            <div className="text-3xl font-bold mt-6 text-center">
                {getTitle(type)}
            </div>
            <div className="text-lg mt-10">{getMessage(type, note, tag)}</div>
            <div className="gap-2 mt-10 grid grid-cols-[150px_150px]">
                <Button color="purple" onClick={onSubmitClick}>
                    Submit
                </Button>
                <Button color="red" onClick={closeModalHandler}>
                    Discard
                </Button>
            </div>
        </div>
    );
};
