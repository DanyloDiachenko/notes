import { Modal } from "@/types/modal.enum";
import { Authorization } from "./Authorization";
import { ConfirmArchiveNote } from "./ConfirmArchiveNote";
import { ConfirmDeleteNote } from "./ConfirmDeleteNote";
import { ConfirmDeleteTag } from "./ConfirmDeleteTag";
import { ConfirmUnarchiveNote } from "./ConfirmUnarchiveNote";
import { Modal as IModal } from "./modal.interface";
import { Tag } from "./Tag";
import { Note } from "./Note";

export const modals: IModal[] = [
    { key: Modal.CreateNote, component: <Note mode="create" /> },
    { key: Modal.EditNote, component: <Note mode="edit" /> },
    { key: Modal.ConfirmArchiveNote, component: <ConfirmArchiveNote /> },
    { key: Modal.ConfirmDeleteNote, component: <ConfirmDeleteNote /> },
    { key: Modal.CreateTag, component: <Tag mode="create" /> },
    { key: Modal.ConfirmDeleteTag, component: <ConfirmDeleteTag /> },
    { key: Modal.EditTag, component: <Tag mode="edit" /> },
    { key: Modal.Authorization, component: <Authorization /> },
    { key: Modal.ConfirmUnarchiveNote, component: <ConfirmUnarchiveNote /> },
];
