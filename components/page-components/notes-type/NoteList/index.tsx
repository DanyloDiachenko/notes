"use client";

import { useEffect, useState } from "react";
import { CreateNote } from "./Create";
import { Note as NoteComponent } from "./Note";
import { NoteListProps } from "./noteList.props";
import { Note } from "@/types/note.interface";
import { usePathname, useParams, useSearchParams } from "next/navigation";
import { getNotes } from "@/api/notes.api";
import { useAppSelector } from "@/store/store";
import { selectSearchNote } from "@/store/slices/searchNote";
import { NotesType } from "@/types/notesType.enum";

export const NoteList = ({ serverNotes, notesType }: NoteListProps) => {
    const pathname = usePathname();
    const params = useParams();
    const searchParams = useSearchParams();

    const noteId = params.noteId as string | undefined;

    const search = useAppSelector(selectSearchNote);

    const [notes, setNotes] = useState<Note[]>(serverNotes);

    const getAndSetNotes = async () => {
        const notesType = params.type as NotesType;
        const tag = searchParams.get("tag") || undefined;

        try {
            const notesResponse = (await getNotes({
                notesType,
                tag,
                search,
            })) as Note[];

            setNotes(notesResponse);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAndSetNotes();
    }, [pathname, params, searchParams, search]);

    return (
        <div className="xl:p-8 xl:pr-4 sm:p-4 p-2 border-r-2 border-gray-200">
            {notesType === "all" && <CreateNote />}
            <div className={notesType === "all" ? "mt-4" : ""}>
                {notes.length ? (
                    notes.map((note, index) => (
                        <NoteComponent
                            key={index}
                            note={note}
                            notesType={notesType}
                            noteId={noteId}
                        />
                    ))
                ) : (
                    <div className="font-medium">Nothing here...</div>
                )}
            </div>
        </div>
    );
};
