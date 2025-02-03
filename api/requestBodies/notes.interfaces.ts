import { NotesType } from "@/types/notesType.type";

export interface GetNotesRequestBody {
    notesType?: NotesType;
    tag?: string;
    search?: string;
}

export interface CreateNoteRequestBody {
    title: string;
    content: string;
    tagIds: string[];
}

export interface UpdateNoteRequestBody extends Partial<CreateNoteRequestBody> {
    isArchived?: boolean;
}
