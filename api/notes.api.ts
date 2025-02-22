import { fetchApi } from "./fetchApi.api";
import { GetNotesParams } from "./params/notes.interface";
import {
    CreateNoteRequestBody,
    UpdateNoteRequestBody,
} from "./requestBodies/notes.interfaces";
import {
    CreateNoteResponse,
    DeleteNoteResponse,
    GetNoteResponse,
    GetNotesResponse,
    UpdateNoteResponse,
} from "./responses/notes.types";

export const getNotes = async (
    params: GetNotesParams,
): Promise<GetNotesResponse> => {
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

export const getNote = async (noteId: string): Promise<GetNoteResponse> =>
    fetchApi({
        endpoint: `/notes/${noteId}`,
        isAuthRequired: true,
        method: "GET",
    });

export const createNote = async (
    createNoteBody: CreateNoteRequestBody,
): Promise<CreateNoteResponse> =>
    fetchApi({
        endpoint: "/notes",
        method: "POST",
        body: createNoteBody,
        isAuthRequired: true,
    });

export const updateNote = async (
    noteId: string,
    updateNoteBody: UpdateNoteRequestBody,
): Promise<UpdateNoteResponse> =>
    fetchApi({
        endpoint: `/notes/${noteId}`,
        method: "PUT",
        body: updateNoteBody,
        isAuthRequired: true,
    });

export const deleteNote = async (noteId: string): Promise<DeleteNoteResponse> =>
    fetchApi({
        endpoint: `/notes/${noteId}`,
        method: "DELETE",
        isAuthRequired: true,
    });
