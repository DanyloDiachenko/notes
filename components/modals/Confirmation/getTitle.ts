import { ConfirmationProps } from "./Confirmation.props";

export const getTitle = (type: ConfirmationProps["type"]) => {
    switch (type) {
        case "archiveNote":
            return "Archive Note";
        case "unarchiveNote":
            return "Unarchive Note";
        case "deleteNote":
            return "Delete Note";
        case "deleteTag":
            return "Delete Tag";
        default:
            return "";
    }
};
