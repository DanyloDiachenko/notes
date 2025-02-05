import Link from "next/link";
import { NoteProps } from "./note.props";
import { formatDate } from "@/helpers/formatDate";
import { cn } from "@/helpers/cn";

export const Note = ({ note, notesType, noteId }: NoteProps) => {
    return (
        <div
            className={cn(
                "p-3 border-b-2 border-gray-200 duration-500",
                noteId === note.id ? "bg-slate-100 border-opacity-0" : "",
            )}
        >
            <Link
                className={cn(
                    "font-bold text-xl text-slate-800 hover:text-[#7351f5]",
                    noteId === note.id ? "text-[#7351f5_!important]" : "",
                )}
                href={`/${notesType}/${note.id}`}
                scroll={false}
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
                {formatDate(note.updatedAt)}
            </div>
        </div>
    );
};
