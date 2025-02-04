import { Note } from "@/types/note.interface";
import { NotesType } from "@/types/notesType.enum";

export interface NoteActionsProps {
    note: Note;
    noteType: NotesType;
}
