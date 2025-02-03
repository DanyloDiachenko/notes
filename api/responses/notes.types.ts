import { Note } from "@/types/note.interface";
import { UnathorizedResponse } from "./common/unathorized.interface";
import { NotFoundResponse } from "./common/notFound.interface";
import { BadRequestResponse } from "./common/badRequest.interface";
import { DeleteSuccessResponse } from "./common/deleteSuccess.interface";

export type GetNotesResponse = Note[] | UnathorizedResponse;

export type GetNoteResponse = Note | UnathorizedResponse | NotFoundResponse;

export type CreateNoteResponse =
    | Note
    | BadRequestResponse
    | UnathorizedResponse;

export type UpdateNoteResponse = Note | NotFoundResponse | UnathorizedResponse;

export type DeleteNoteResponse =
    | NotFoundResponse
    | UnathorizedResponse
    | DeleteSuccessResponse;
