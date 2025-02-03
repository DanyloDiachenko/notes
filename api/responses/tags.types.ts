import { Tag } from "@/types/tag.interface";
import { UnathorizedResponse } from "./common/unathorized.interface";
import { NotFoundResponse } from "./common/notFound.interface";
import { BadRequestResponse } from "./common/badRequest.interface";
import { DeleteSuccessResponse } from "./common/deleteSuccess.interface";

export type GetTagsResponse = UnathorizedResponse | Tag[];

export type GetTagResponse = Tag | UnathorizedResponse | NotFoundResponse;

export type CreateTagResponse = Tag | UnathorizedResponse | BadRequestResponse;

export type UpdateTagResponse = Tag | UnathorizedResponse | NotFoundResponse;

export type DeleteTagResponse = NotFoundResponse | DeleteSuccessResponse;