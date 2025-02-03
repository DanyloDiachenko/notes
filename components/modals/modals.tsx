import { Modal } from "@/types/modal.enum";
import { Authorization } from "./Authorization";
import { ConfirmArchiveNote } from "./ConfirmArchiveNote";
import { ConfirmDeleteNote } from "./ConfirmDeleteNote";
import { ConfirmDeleteTag } from "./ConfirmDeleteTag";
import { ConfirmUnarchiveNote } from "./ConfirmUnarchiveNote";
import { CreateNote } from "./CreateNote";
import { CreateTag } from "./CreateTag";
import { EditNote } from "./EditNote";
import { EditTag } from "./EditTag";
import { Modal as IModal } from "./modal.interface";

export const modals: IModal[] = [
    { key: Modal.CrateNote, component: <CreateNote /> },
    { key: Modal.EditNote, component: <EditNote /> },
    { key: Modal.ConfirmArchiveNote, component: <ConfirmArchiveNote /> },
    { key: Modal.ConfirmDeleteNote, component: <ConfirmDeleteNote /> },
    { key: Modal.CreateTag, component: <CreateTag /> },
    { key: Modal.ConfirmDeleteTag, component: <ConfirmDeleteTag /> },
    { key: Modal.EditTag, component: <EditTag /> },
    { key: Modal.Authorization, component: <Authorization /> },
    { key: Modal.ConfirmUnarchiveNote, component: <ConfirmUnarchiveNote /> },
];
