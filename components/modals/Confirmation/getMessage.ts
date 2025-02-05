import { Tag } from "@/types/tag.interface";
import { ConfirmationProps } from "./Confirmation.props";
import { Note } from "@/types/note.interface";

export const getMessage = (
    type: ConfirmationProps["type"],
    note: Note | null,
    tag: Tag | null,
) => {
    switch (type) {
        case "archiveNote":
            return `Are you sure you want to archive note: ${note?.title}?`;
        case "unarchiveNote":
            return `Are you sure you want to unarchive note: ${note?.title}?`;
        case "deleteNote":
            return `Are you sure you want to delete note: ${note?.title}?`;
        case "deleteTag":
            return `Are you sure you want to delete tag: ${tag?.title}?`;
        default:
            return "";
    }
};
