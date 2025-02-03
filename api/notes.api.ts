import { Note } from "@/types/note.interface";
import { fetchApi } from "./fetchApi.api";
import { UnathorizedResponse } from "./responses/common/unathorized.interface";
import { NotFoundResponse } from "./responses/common/notFound.interface";
import { BadRequestResponse } from "./responses/common/badRequest.interface";

interface GetNotesRequestBody {
    notesType?: "all" | "archived";
    tag?: string;
    search?: string;
}

export const getNotes = async (
    params: GetNotesRequestBody,
): Promise<Note[] | UnathorizedResponse> => {
    const queryParams = new URLSearchParams();

    if (params.notesType) {
        queryParams.append(
            "isArchived",
            params.notesType === "archived" ? "true" : "false",
        );
    }
    if (params.tag) {
        queryParams.append("tag", params.tag);
    }
    if (params.search) {
        queryParams.append("search", params.search);
    }

    return fetchApi({
        endpoint: `/notes?${queryParams.toString()}`,
        isAuthRequired: true,
        method: "GET",
    });
};

export const getNote = async (
    noteId: string,
): Promise<Note | UnathorizedResponse | NotFoundResponse> =>
    fetchApi({
        endpoint: `/notes/${noteId}`,
        isAuthRequired: true,
        method: "GET",
    });

interface CreateNoteBody {
    title: string;
    content: string;
    tagIds: string[];
}

export const createNote = async (
    createNoteBody: CreateNoteBody,
): Promise<Note | BadRequestResponse> =>
    fetchApi({
        endpoint: "/notes",
        method: "POST",
        body: createNoteBody,
        isAuthRequired: true,
    });

interface UpdateNoteBody extends Partial<CreateNoteBody> {
    isArchived?: boolean;
}

export const updateNote = async (
    noteId: string,
    updateNoteBody: UpdateNoteBody,
): Promise<Note | NotFoundResponse> =>
    fetchApi({
        endpoint: `/notes/${noteId}`,
        method: "PUT",
        body: updateNoteBody,
        isAuthRequired: true,
    });

export const deleteNote = async (
    noteId: string,
): Promise<NotFoundResponse | {}> =>
    fetchApi({
        endpoint: `/notes/${noteId}`,
        method: "DELETE",
        isAuthRequired: true,
    });
