import { FiPlus } from "react-icons/fi";

export const CreateNote = () => {
    return (
        <button className="flex items-center justify-center gap-2 p-2 py-3 w-full bg-blue-600 text-white rounded-lg hover:bg-[#7351f5]">
            <FiPlus />
            <span>Create New Note</span>
        </button>
    );
}