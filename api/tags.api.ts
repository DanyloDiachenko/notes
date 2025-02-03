import { Tag } from "@/types/tag.interface";
import { fetchApi } from "./fetchApi.api";
import { UnathorizedResponse } from "./responses/common/unathorized.interface";
import { NotFoundResponse } from "./responses/common/notFound.interface";
import { BadRequestResponse } from "./responses/common/badRequest.interface";

export const getTags = async (): Promise<Tag[] | UnathorizedResponse> => {
    return fetchApi({ endpoint: "/tags", isAuthRequired: true, method: "GET" });
};

export const getTag = async (
    tagId: string,
): Promise<Tag | UnathorizedResponse | NotFoundResponse> => {
    return fetchApi({
        endpoint: `/tags/${tagId}`,
        isAuthRequired: true,
        method: "GET",
    });
};

interface CreateTagBody {
    title: string;
    slug: string;
}

export const createTag = async (
    createTagBody: CreateTagBody,
): Promise<Tag | UnathorizedResponse | BadRequestResponse> => {
    return fetchApi({
        endpoint: "/tags",
        method: "POST",
        body: createTagBody,
        isAuthRequired: true,
    });
};

interface UpdateTagBody extends Partial<CreateTagBody> {}

export const updateTag = async (
    tagId: string,
    updateTagBody: UpdateTagBody,
): Promise<Tag | NotFoundResponse> => {
    return fetchApi({
        endpoint: `/tags/${tagId}`,
        method: "PUT",
        body: updateTagBody,
        isAuthRequired: true,
    });
};

export const deleteTag = async (
    tagId: string,
): Promise<NotFoundResponse | {}> => {
    return fetchApi({
        endpoint: `/tags/${tagId}`,
        method: "DELETE",
        isAuthRequired: true,
    });
};
