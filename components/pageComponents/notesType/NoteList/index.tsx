"use client";

import { useEffect, useState } from "react";
import { CreateNote } from "./Create";
import { Note as NoteComponent } from "./Note";
import { NoteListProps } from "./noteList.props";
import { Note } from "@/types/note.interface";
import { usePathname, useParams, useSearchParams } from "next/navigation";
import { getNotes } from "@/api/notes";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export const NoteList = ({ serverNotes, notesType }: NoteListProps) => {
    const pathname = usePathname();
    const params = useParams();
    const searchParams = useSearchParams();

    const search = useSelector((state: RootState) => state.searchNote.search);

    const [notes, setNotes] = useState<Note[]>(serverNotes);

    const getAndSetNotes = async () => {
        const notesType = params.type as "all" | "archived";
        const tag = searchParams.get("tag") || undefined;

        try {
            const notesResponse = await getNotes({
                notesType,
                tag,
                search,
            });

            setNotes(notesResponse);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAndSetNotes();
    }, [pathname, params, searchParams]);

    return (
        <div className="p-8 pr-4 border-r-2 border-gray-200">
            {notesType === "all" && <CreateNote />}
            <div className="mt-4">
                {notes.length ? (
                    notes.map((note, index) => (
                        <NoteComponent key={index} note={note} />
                    ))
                ) : (
                    <div className="font-medium">Nothing here...</div>
                )}
            </div>
        </div>
    );
};
