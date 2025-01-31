import { Tag } from "./common/tag.interface";

export interface Note {
    id: string;
    title: string;
    tags: Tag[];
    updatedAt: string;
    content: string;
}
