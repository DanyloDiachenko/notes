"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Multiselect } from "@/components/ui/Multiselect";
import { closeModal } from "@/store/slices/openedModal";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTags } from "@/api/tags.api";
import { createNote, updateNote } from "@/api/notes.api";
import { SelectOption } from "@/types/selectOption.interface";
import { Tag } from "@/types/tag.interface";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { selectNote } from "@/store/slices/note";
import { NoteProps } from "./Note.props";

export const Note = ({ mode }: NoteProps) => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const note = useAppSelector(selectNote);

    const [noteTitle, setNoteTitle] = useState(
        mode === "edit" ? note?.title || "" : "",
    );
    const [noteDetails, setNoteDetails] = useState(
        mode === "edit" ? note?.content || "" : "",
    );
    const [noteTags, setNoteTags] = useState<SelectOption[]>(
        mode === "edit"
            ? note?.tags.map((tag) => ({ title: tag.title, value: tag.id })) ||
                  []
            : [],
    );
    const [tags, setTags] = useState<Tag[]>([]);

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const tags = (await getTags()) as Tag[];
                setTags(tags);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTags();
    }, []);

    const closeModalHandler = () => {
        dispatch(closeModal());
    };

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!noteTitle || !noteDetails) {
            toast.error("Please fill all fields");
            return;
        }

        try {
            const payload = {
                title: noteTitle,
                content: noteDetails,
                tagIds: noteTags.map((tag) => tag.value),
            };

            const response =
                mode === "edit" && note
                    ? await updateNote(note.id, payload)
                    : await createNote(payload);

            if ("message" in response) {
                toast.error(response.message);
                return;
            }

            toast.success(
                `Note ${mode === "edit" ? "updated" : "created"} successfully`,
            );
            closeModalHandler();
            router.refresh();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="relative">
            <div className="text-3xl font-bold mt-6 text-center">
                {mode === "edit" ? "Edit Note" : "Create New Note"}
            </div>
            <form action="#" className="mt-10 block" onSubmit={onSubmit}>
                <label
                    htmlFor="noteTitle"
                    className="block font-medium text-lg"
                >
                    Note Title
                </label>
                <Input
                    id="noteTitle"
                    name="note title"
                    className="mt-2"
                    type="text"
                    placeholder="Note title..."
                    value={noteTitle}
                    onChange={(e) => setNoteTitle(e.target.value)}
                />
                <label className="mt-4 block" htmlFor="noteTags">
                    <div className="font-medium text-lg">Note Tags</div>
                    <Multiselect
                        id="noteTags"
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
                <label className="mt-4 block font-medium text-lg">
                    Note Details
                </label>
                <Textarea
                    className="mt-2"
                    placeholder="Note details..."
                    value={noteDetails}
                    onChange={(e) => setNoteDetails(e.target.value)}
                    id="noteDetails"
                    name="note details"
                />
                <div className="gap-2 mt-10 grid grid-cols-[150px_150px]">
                    <Button color="purple" type="submit">
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
