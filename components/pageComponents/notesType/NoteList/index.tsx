import { CreateNote } from "./Create";
import { Note } from "@/types/note.interface";
import { Note as NoteComponent } from "./Note";
import { NoteListProps } from "./noteList.props";
import { getNotes } from "@/api/notes";

export const NoteList = async ({ notesType, tag, search }: NoteListProps) => {
    const notes: Note[] = await getNotes({ notesType, tag, search });

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
