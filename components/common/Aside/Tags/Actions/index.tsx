import { Button } from "@/components/ui/Button";
import { Modal } from "@/interfaces/common/modal.type";
import { setOpenedModal } from "@/store/slices/openedModal";
import { useDispatch } from "react-redux";
import { MdOutlineDelete, MdOutlineModeEditOutline } from "react-icons/md";
import { ActionsProps } from "./actions.props";

export const Actions = ({ onEditClickTagCallback }: ActionsProps) => {
    const dispatch = useDispatch();

    const setOpenedModalHandler = (modalToOpen: Modal) => {
        dispatch(setOpenedModal(modalToOpen));
    };

    const onEditClick = () => {
        setOpenedModalHandler("editTag");
        onEditClickTagCallback();
    };

    return (
        <div className="flex items-center gap-2">
            <Button color="gray" className="p-0" onClick={onEditClick}>
                <MdOutlineModeEditOutline className="size-6 p-1" />
            </Button>
            <Button
                color="red"
                className="p-0 px-0"
                onClick={() => setOpenedModalHandler("confirmDeleteTag")}
            >
                <MdOutlineDelete className="size-6 p-1" />
            </Button>
        </div>
    );
};
