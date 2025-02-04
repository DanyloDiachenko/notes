import { Modal as ModalEnum } from "@/types/modal.enum";
import { ReactElement } from "react";

export interface Modal {
    key: ModalEnum;
    component: ReactElement;
}
