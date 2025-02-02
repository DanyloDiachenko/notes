"use client";

import { updateNote } from "@/api/notes";
import { Button } from "@/components/ui/Button";
import { closeModal } from "@/store/slices/openedModal";
import { RootState } from "@/store/store";
import { useParams, useRouter } from "next/navigation";
import { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export const ConfirmUnarchiveNote = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const params = useParams();

    const noteToUnarchive = useSelector(
        (state: RootState) => state.noteToUnarchive.noteToUnarchive,
    );

    const closeModalHandler = () => {
        dispatch(closeModal());
    };

    const onUnarchiveNoteSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const unarchiveNoteResponse = await updateNote(noteToUnarchive.id, {
                isArchived: false,
            });

            if (unarchiveNoteResponse.message) {
                toast.error(unarchiveNoteResponse.message);
                return;
            }

            if (unarchiveNoteResponse.id) {
                toast.success("Note updated successfuly");

                const timeoutId = setTimeout(() => {
                    closeModalHandler();

                    clearTimeout(timeoutId);
                }, 4000);

                router.push(`/${params.type}`);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="relative">
            <div className="text-3xl font-bold mt-6 text-center">
                Archive Note
            </div>
            <div className="text-lg mt-10">
                Are you sure want to unarchive note:
            </div>
            <div className="font-semibold text-xl">
                {noteToUnarchive.title}?
            </div>
            <div className="gap-2 mt-10 grid grid-cols-[150px_150px]">
                <Button color="purple" onClick={onUnarchiveNoteSubmit}>
                    Sumbit
                </Button>
                <Button color="red" onClick={closeModalHandler}>
                    Discard
                </Button>
            </div>
        </div>
    );
};
