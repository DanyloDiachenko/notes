"use client";

import { updateNote } from "@/api/notes";
import { Button } from "@/components/ui/Button";
import { closeModal } from "@/store/slices/openedModal";
import { RootState } from "@/store/store";
import { useParams, useRouter } from "next/navigation";
import { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export const ConfirmArchiveNote = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const params = useParams();

    const noteToArchive = useSelector(
        (state: RootState) => state.noteToArchive.noteToArchive,
    );

    const closeModalHandler = () => {
        dispatch(closeModal());
    };

    const onArchiveNoteSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const archiveNoteResponse = await updateNote(noteToArchive.id, {
                isArchived: true,
            });

            if (archiveNoteResponse.message) {
                toast.error(archiveNoteResponse.message);
                return;
            }

            if (archiveNoteResponse.id) {
                toast.success("Note updated successfuly");

                closeModalHandler();
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
                Are you sure want to archive note:
            </div>
            <div className="font-semibold text-xl">{noteToArchive.title}?</div>
            <div className="gap-2 mt-10 grid grid-cols-[150px_150px]">
                <Button color="purple" onClick={onArchiveNoteSubmit}>
                    Sumbit
                </Button>
                <Button color="red" onClick={closeModalHandler}>
                    Discard
                </Button>
            </div>
        </div>
    );
};
