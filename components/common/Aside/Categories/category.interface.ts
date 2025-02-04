import { NotesType } from "@/types/notesType.enum";
import { ReactElement } from "react";

export interface Category {
    title: string;
    icon: ReactElement;
    type: NotesType;
}
