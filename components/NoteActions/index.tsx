import { IoArchiveOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { NoteActionsProps } from "./noteActions.props";

export const NoteActions = ({ note }: NoteActionsProps) => {
    return (
        <div className="pl-4 pr-8">
            <button
                className="mt-6 p-2 px-4 flex gap-2 items-center rounded-lg border-2
                        border-gray-200 w-full font-medium text-gray-600 hover:bg-gray-200 hover:text-gray-800"
            >
                <IoArchiveOutline />
                <span>Archive Note</span>
            </button>
            <button
                className="mt-3 p-2 px-4 flex gap-2 items-center rounded-lg border-2
                        border-gray-200 w-full font-medium text-gray-600 hover:bg-red-400 hover:border-red-400 hover:text-white"
            >
                <MdOutlineDelete />
                <span>Delete Note</span>
            </button>
        </div>
    );
};
