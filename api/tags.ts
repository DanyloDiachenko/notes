import { getCookie } from "@/helpers/getCookie";
import { Tag } from "@/types/tag.interface";

export const getTag = async (tagId: string): Promise<Tag> => {
    const token = await getCookie("token");

    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/tags/${tagId}`, {
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

export const getTags = async (): Promise<Tag[]> => {
    const token = await getCookie("token");

    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/tags`, {
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

interface UpdateTagBody extends Partial<Tag> {
    id: string;
}

export const updateTag = async (tagToUpdate: UpdateTagBody) => {
    const token = await getCookie("token");

    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/tags/${tagToUpdate.id}`, {
        method: "PUT",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(tagToUpdate),
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

export const deleteTag = async (tagId: string) => {
    const token = await getCookie("token");

    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/tags/${tagId}`, {
        method: "DELETE",
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

interface CreateTagBody {
    title: string;
    slug: string;
}

export const createTag = async (createTagBody: CreateTagBody) => {
    const token = await getCookie("token");

    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/tags/`, {
        method: "POST",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(createTagBody),
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
