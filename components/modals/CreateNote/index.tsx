"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { closeModal } from "@/store/slices/openedModal";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Multiselect } from "@/components/ui/Multiselect";
import { Tag } from "@/types/tag.interface";
import { getTags } from "@/api/tags";
import { SelectOption } from "@/types/selectOption.interface";

export const CreateNote = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [noteTitle, setNoteTitle] = useState("");
    const [noteDetails, setNoteDetails] = useState("");
    const [noteTags, setNoteTags] = useState<SelectOption[]>([]);
    const [tags, setTags] = useState<Tag[]>([]);

    const closeModalHandler = () => {
        dispatch(closeModal());
    };

    const onCreateNoteSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    const getTagsHandler = async () => {
        try {
            const tags = await getTags();

            setTags(tags);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getTagsHandler();
    });

    return (
        <div className="relative">
            <div className="text-3xl font-bold mt-6 text-center">
                Create New Note
            </div>
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
                        placeholder="Note details..."
                        value={noteDetails}
                        onChange={(e) => setNoteDetails(e.target.value)}
                    />
                </label>
                <div className="gap-2 mt-10 grid grid-cols-[150px_150px]">
                    <Button color="purple" onClick={onCreateNoteSubmit}>
                        Sumbit
                    </Button>
                    <Button color="red" onClick={closeModalHandler}>
                        Discard
                    </Button>
                </div>
            </form>
        </div>
    );
};
