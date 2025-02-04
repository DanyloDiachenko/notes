import { Modal } from "@/types/modal.enum";
import { Authorization } from "./Authorization";
import { ConfirmArchiveNote } from "./ConfirmArchiveNote";
import { ConfirmDeleteNote } from "./ConfirmDeleteNote";
import { ConfirmDeleteTag } from "./ConfirmDeleteTag";
import { ConfirmUnarchiveNote } from "./ConfirmUnarchiveNote";
import { CreateNote } from "./CreateNote";
import { EditNote } from "./EditNote";
import { Modal as IModal } from "./modal.interface";
import { Tag } from "./Tag";

export const modals: IModal[] = [
    { key: Modal.CreateNote, component: <CreateNote /> },
    { key: Modal.EditNote, component: <EditNote /> },
    { key: Modal.ConfirmArchiveNote, component: <ConfirmArchiveNote /> },
    { key: Modal.ConfirmDeleteNote, component: <ConfirmDeleteNote /> },
    { key: Modal.CreateTag, component: <Tag type="create" /> },
    { key: Modal.ConfirmDeleteTag, component: <ConfirmDeleteTag /> },
    { key: Modal.EditTag, component: <Tag type="edit" /> },
    { key: Modal.Authorization, component: <Authorization /> },
    { key: Modal.ConfirmUnarchiveNote, component: <ConfirmUnarchiveNote /> },
];
