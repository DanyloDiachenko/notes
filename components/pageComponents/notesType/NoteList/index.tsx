"use client";

import { useEffect, useState } from "react";
import { CreateNote } from "./Create";
import { Note as NoteComponent } from "./Note";
import { NoteListProps } from "./noteList.props";
import { Note } from "@/types/note.interface";
import { usePathname, useParams, useSearchParams } from "next/navigation";
import { getNotes } from "@/api/notes";

export const NoteList = ({ serverNotes }: NoteListProps) => {
    const pathname = usePathname();
    const params = useParams();
    const searchParams = useSearchParams();

    const [notes, setNotes] = useState<Note[]>(serverNotes);

    console.log(pathname, params, searchParams);

    const getAndSetNotes = async () => {
        const notesType = params.type as "all" | "archived";
        const tag = searchParams.get("tag") || undefined;

        try {
            const notesResponse = await getNotes({
                notesType,
                tag,
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
            <CreateNote />
            <div className="mt-4">
                {notes.map((note, index) => (
                    <NoteComponent key={index} note={note} />
                ))}
            </div>
        </div>
    );
};
