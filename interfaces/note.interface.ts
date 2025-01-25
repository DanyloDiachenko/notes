import { Tag } from "./tag.interface";

export interface Note {
    id: string;
    title: string;
    tags: Tag[];
    createdAt: string;
}