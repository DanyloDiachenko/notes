import { NotesType } from "@/types/notesType.enum";

export interface GetNotesParams {
    notesType?: NotesType;
    tag?: string;
    search?: string;
}
