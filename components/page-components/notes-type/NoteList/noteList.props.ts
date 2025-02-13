import { Note } from "@/types/note.interface";

export interface NoteListProps {
    serverNotes: Note[];
    notesType: "all" | "archived";
}
