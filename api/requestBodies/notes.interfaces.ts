export interface CreateNoteRequestBody {
    title: string;
    content: string;
    tagIds: string[];
}

export interface UpdateNoteRequestBody extends Partial<CreateNoteRequestBody> {
    isArchived?: boolean;
}
