"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { closeModal } from "@/store/slices/openedModal";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Multiselect } from "@/components/ui/Multiselect";
import { Tag } from "@/types/tag.interface";
import { getTags } from "@/api/tags.api";
import { SelectOption } from "@/types/selectOption.interface";
import { updateNote } from "@/api/notes.api";
import { toast } from "react-toastify";
import { RootState, useAppSelector } from "@/store/store";
import { Textarea } from "@/components/ui/Textarea";
import { selectNote } from "@/store/slices/note";

export const EditNote = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const note = useAppSelector(selectNote);

    if (!note) {
        return null;
    }

    const [noteTitle, setNoteTitle] = useState(note.title);
    const [noteDetails, setNoteDetails] = useState(note.content);
    const [noteTags, setNoteTags] = useState<SelectOption[]>(
        note.tags.map((tag) => ({
            title: tag.title,
            value: tag.id,
        })),
    );
    const [tags, setTags] = useState<Tag[]>([]);

    const closeModalHandler = () => {
        dispatch(closeModal());
    };

    const onEditNoteSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!noteTitle || !noteDetails) {
            toast.error("Please fill all fields");
            return;
        }

        try {
            const editNoteResponse = await updateNote(note.id, {
                title: noteTitle,
                content: noteDetails,
                tagIds: noteTags.map((tag) => tag.value),
            });

            if ("message" in editNoteResponse) {
                toast.error(editNoteResponse.message);
                return;
            }

            if (editNoteResponse.id) {
                toast.success("Note updated successfuly");

                closeModalHandler();
                router.refresh();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getTagsHandler = async () => {
        try {
            const tags = (await getTags()) as Tag[];

            setTags(tags);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getTagsHandler();
    }, []);

    return (
        <div className="relative">
            <div className="text-3xl font-bold mt-6 text-center">Edit Note</div>
            <form action="#" className="mt-10 block">
                <label htmlFor="">
                    <div className="font-medium text-lg">Note Title</div>
                    <Input
                        type="text"
                        className="mt-2"
                        placeholder="Note title..."
                        value={noteTitle}
                        onChange={(e) => setNoteTitle(e.target.value)}
                    />
                </label>
                <label htmlFor="" className="mt-4 block">
                    <div className="font-medium text-lg">Note Tags</div>
                    <Multiselect
                        placeholder="Select tags..."
                        activeOptions={noteTags}
                        setActiveOptions={setNoteTags}
                        options={tags.map((tag) => ({
                            title: tag.title,
                            value: tag.id,
                        }))}
                        className="mt-2"
                    />
                </label>
                <label htmlFor="" className="mt-4 block">
                    <div className="font-medium text-lg">Note Details</div>
                    <Textarea
                        className="mt-2"
                        value={noteDetails}
                        onChange={(e) => setNoteDetails(e.target.value)}
                    />
                </label>
                <div className="gap-2 mt-10 grid grid-cols-[150px_150px]">
                    <Button
                        color="purple"
                        onClick={onEditNoteSubmit}
                        type="submit"
                    >
                        Submit
                    </Button>
                    <Button color="red" onClick={closeModalHandler}>
                        Discard
                    </Button>
                </div>
            </form>
        </div>
    );
};
