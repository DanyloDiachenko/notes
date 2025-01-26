import { Button } from "@/components/ui/Button";
import { Modal } from "@/interfaces/modal.type";
import { setOpenedModal } from "@/store/slices/openedModal";
import { useDispatch } from "react-redux";

export const Actions = () => {
    const dispatch = useDispatch();

    const setOpenedModalHandler = (modalToOpen: Modal) => {
        dispatch(setOpenedModal(modalToOpen));
    };

    return (
        <div className="flex items-center gap-2">
            <Button
                color="gray"
                className="p-0 px-0"
                onClick={() => setOpenedModalHandler("editTag")}
            >
                e
            </Button>
            <Button
                color="red"
                className="p-0 px-0"
                onClick={() => setOpenedModalHandler("confirmDeleteTag")}
            >
                d
            </Button>
        </div>
    );
};
