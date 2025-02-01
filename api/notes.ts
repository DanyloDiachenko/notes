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

export const getNote = async (noteId: string) => {
    const token = await getCookie("token");

    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes/${noteId}`, {
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

interface UpdateNoteBody {
    title: string;
    content: string;
    tagIds: string[];
}

export const updateNote = async (
    noteId: string,
    updateNoteBody: UpdateNoteBody,
) => {
    const token = await getCookie("token");

    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes/${noteId}`, {
        method: "PUT",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updateNoteBody),
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

export const deleteNote = () => {};

interface CreateNoteBody {
    title: string;
    content: string;
    tagIds: string[];
}

export const createNote = async (createNoteBody: CreateNoteBody) => {
    const token = await getCookie("token");

    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes`, {
        method: "POST",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(createNoteBody),
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
