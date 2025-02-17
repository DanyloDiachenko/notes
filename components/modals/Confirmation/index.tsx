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
import { IoArchiveOutline } from "react-icons/io5";
import { Modal } from "@/types/modal.enum";
import { RiDeleteBin2Line } from "react-icons/ri";

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

            router.refresh();
            closeModalHandler();

            const timeoutId = setTimeout(() => {
                router.push(`/${params.type || ""}`);

                clearTimeout(timeoutId);
            }, 500);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="relative h-[96%]">
            <div className="text-xl sm:text-3xl font-bold mt-3 sm:mt-6 text-center">
                {getTitle(type)}
            </div>
            <div className="mt-6 sm:mt-10 overflow-y-auto max-h-[70%]">
                <div className="block text-base sm:text-lg">
                    {getMessage(type, note, tag)}
                </div>
                {type === "archiveNote" || type === "unarchiveNote" ? (
                    <IoArchiveOutline className="size-20 mx-auto mt-4 text-gray-600" />
                ) : (
                    <RiDeleteBin2Line className="size-20 mx-auto mt-4 text-gray-600" />
                )}
            </div>
            <div className="gap-2 items-end grid grid-cols-[1fr_1fr] sm:grid-cols-[150px_150px] absolute bottom-0 left-0 right-0">
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
