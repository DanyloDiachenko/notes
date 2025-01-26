import { Button } from "@/components/ui/Button";
import { FiPlus } from "react-icons/fi";

export const CreateNote = () => {
    return (
        <Button className="gap-2 p-2 py-3" color="purple">
            <FiPlus />
            <span>Create New Note</span>
        </Button>
    );
};
