"use client";

import Link from "next/link";
import { NoteProps } from "./note.props";
import { useParams } from "next/navigation";

export const Note = ({ note }: NoteProps) => {
    const notesType = useParams().type as string;
    const noteId = useParams().noteId;

    return (
        //bg-slate-100
        <div
            className={`p-3 rounded-md border-b-2 border-gray-200 ${
                noteId === note.id ? "bg-slate-100" : ""
            }`}
        >
            <Link
                className={`font-bold text-xl text-slate-800 hover:text-[#7351f5] ${
                    noteId === note.id ? "text-[#7351f5_!important]" : ""
                }`}
                href={`/${notesType}/${note.id}`}
            >
                {note.title}
            </Link>
            <div className="flex gap-2 mt-2">
                {note.tags.map((tag, index) => (
                    <div
                        key={index}
                        className="bg-slate-300 p-1 rounded-sm text-sm font-medium"
                    >
                        {tag.title}
                    </div>
                ))}
            </div>
            <div className="text-slate-600 mt-3 font-medium">
                {note.updatedAt}
            </div>
        </div>
    );
};
