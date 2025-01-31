import { getCookie } from "@/helpers/getCookie";
import { Note } from "@/types/note.interface";

interface GetNotesParams {
    notesType?: "all" | "archived";
    tag?: string;
    search?: string;
}

export const getNotes = async ({
    notesType,
    tag,
    search,
}: GetNotesParams): Promise<Note[]> => {
    const token = await getCookie("token");

    const queryParams = new URLSearchParams();

    if (notesType) {
        queryParams.append(
            "isArchived",
            notesType === "archived" ? "true" : "false",
        );
    }
    if (tag) {
        queryParams.append("tag", tag);
    }
    if (search) {
        queryParams.append("search", search);
    }

    const url = `${
        process.env.NEXT_PUBLIC_API_URL
    }/notes?${queryParams.toString()}`;

    return fetch(url, {
        method: "GET",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};

export const getNote = () => {};

export const updateNote = () => {};

export const deleteNote = () => {};

export const createNote = () => {};
