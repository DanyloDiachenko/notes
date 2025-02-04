import { Note } from "@/types/note.interface";
import { NotesType } from "@/types/notesType.enum";

export interface NoteProps {
    note: Note;
    notesType: NotesType;
    noteId: string | undefined;
}
