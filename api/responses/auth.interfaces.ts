import { Note } from "@/types/note.interface";
import { Tag } from "@/types/tag.interface";
import { UnathorizedResponse } from "./common/unathorized.interface";
import { BadRequestResponse } from "./common/badRequest.interface";

interface GetProfileResponseSuccess {
    email: string;
    id: string;
    notes: Note[];
    tags: Tag[];
}

export type GetProfileResponse =
    | GetProfileResponseSuccess
    | UnathorizedResponse;

interface LoginResponseSuccess {
    token: string;
    id: string;
    email: string;
}

interface RegisterResponseSuccess extends LoginResponseSuccess {}

export type LoginResponse =
    | LoginResponseSuccess
    | UnathorizedResponse
    | BadRequestResponse;

export type RegisterResponse = LoginResponse;
