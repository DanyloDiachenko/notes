import { NotesType } from "@/types/notesType.enum";

export const getActiveTab = (pathname: string): NotesType | "" => {
    if (pathname.includes("all")) {
        return "all";
    } else if (pathname.includes("archived")) {
        return "archived";
    } else {
        return "";
    }
};