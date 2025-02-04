import { Modal } from "@/types/modal.enum";
import { Authorization } from "./Authorization";
import { Modal as IModal } from "./modal.interface";
import { Tag } from "./Tag";
import { Note } from "./Note";
import { Confirmation } from "./Confirmation";

export const modals: IModal[] = [
    { key: Modal.CreateNote, component: <Note mode="create" /> },
    { key: Modal.EditNote, component: <Note mode="edit" /> },
    {
        key: Modal.ConfirmArchiveNote,
        component: <Confirmation type="archiveNote" />,
    },
    {
        key: Modal.ConfirmDeleteNote,
        component: <Confirmation type="deleteNote" />,
    },
    { key: Modal.CreateTag, component: <Tag mode="create" /> },
    {
        key: Modal.ConfirmDeleteTag,
        component: <Confirmation type="deleteTag" />,
    },
    { key: Modal.EditTag, component: <Tag mode="edit" /> },
    { key: Modal.Authorization, component: <Authorization /> },
    {
        key: Modal.ConfirmUnarchiveNote,
        component: <Confirmation type="unarchiveNote" />,
    },
];
