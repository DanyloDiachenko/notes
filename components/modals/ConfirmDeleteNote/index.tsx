"use client";

import { deleteNote } from "@/api/notes";
import { Button } from "@/components/ui/Button";
import { closeModal } from "@/store/slices/openedModal";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useParams } from "next/navigation";

export const ConfirmDeleteNote = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const params = useParams();

    const closeModalHandler = () => {
        dispatch(closeModal());
    };

    const noteToDelete = useSelector(
        (state: RootState) => state.noteToDelete.noteToDelete,
    );

    const onDeleteNoteSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const deleteNoteResponse = await deleteNote(noteToDelete.id);

            if (deleteNoteResponse.message) {
                toast.error(deleteNoteResponse.message);
                return;
            }

            toast.success("Note deleted successfuly");

            const timeoutId = setTimeout(() => {
                closeModalHandler();

                clearTimeout(timeoutId);
            }, 4000);

            router.push(`/${params.type}`);
        } catch (error) {
            console.log(error);
        }
    };
    console.log(params.type);

    return (
        <div className="relative">
            <div className="text-3xl font-bold mt-6 text-center">
                Delete Note
            </div>
            <div className="text-lg mt-10">
                Are you sure want to delete note:
            </div>
            <div className="font-semibold text-xl">{noteToDelete.title}?</div>
            <div className="gap-2 mt-10 grid grid-cols-[150px_150px]">
                <Button color="purple" onClick={onDeleteNoteSubmit}>
                    Sumbit
                </Button>
                <Button color="red" onClick={closeModalHandler}>
                    Discard
                </Button>
            </div>
        </div>
    );
};
