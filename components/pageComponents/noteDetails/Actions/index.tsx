import { IoArchiveOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { NoteActionsProps } from "./noteActions.props";
import { Button } from "@/components/ui/Button";

export const NoteActions = ({ note }: NoteActionsProps) => {
    return (
        <div className="pl-4 pr-8">
            <Button className="mt-6 gap-2" color="gray">
                <IoArchiveOutline />
                <span>Archive Note</span>
            </Button>
            <Button className="mt-3 gap-2" color="red">
                <MdOutlineDelete />
                <span>Delete Note</span>
            </Button>
        </div>
    );
};
