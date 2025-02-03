import { fetchApi } from "./fetchApi.api";
import {
    CreateTagResponse,
    DeleteTagResponse,
    GetTagResponse,
    GetTagsResponse,
    UpdateTagResponse,
} from "./responses/tags.types";
import {
    CreateTagRequestBody,
    UpdateTagRequestBody,
} from "./requestBodies/tags.interfaces";

export const getTags = async (): Promise<GetTagsResponse> => {
    return fetchApi({ endpoint: "/tags", isAuthRequired: true, method: "GET" });
};

export const getTag = async (tagId: string): Promise<GetTagResponse> => {
    return fetchApi({
        endpoint: `/tags/${tagId}`,
        isAuthRequired: true,
        method: "GET",
    });
};

export const createTag = async (
    createTagBody: CreateTagRequestBody,
): Promise<CreateTagResponse> => {
    return fetchApi({
        endpoint: "/tags",
        method: "POST",
        body: createTagBody,
        isAuthRequired: true,
    });
};

export const updateTag = async (
    tagId: string,
    updateTagBody: UpdateTagRequestBody,
): Promise<UpdateTagResponse> => {
    return fetchApi({
        endpoint: `/tags/${tagId}`,
        method: "PUT",
        body: updateTagBody,
        isAuthRequired: true,
    });
};

export const deleteTag = async (tagId: string): Promise<DeleteTagResponse> => {
    return fetchApi({
        endpoint: `/tags/${tagId}`,
        method: "DELETE",
        isAuthRequired: true,
    });
};
