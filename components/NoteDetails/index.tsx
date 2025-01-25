import { HiOutlineTag } from "react-icons/hi2";
import { IoMdTime } from "react-icons/io";

export const NoteDetails = () => {
    return (
        <div className="p-8 px-4 border-r-2 border-gray-200">
            <h2 className="font-bold text-3xl">
                React Perfomance Optimization
            </h2>
            <div className="mt-6 grid grid-cols-[150px_auto] font-medium">
                <div className="flex items-center gap-1">
                    <HiOutlineTag className="size-6" />
                    <div>Tags</div>
                </div>
                <div>Dev, React</div>
            </div>
            <div className="mt-3 grid grid-cols-[150px_auto] font-medium border-b-2 border-gray-200 pb-6">
                <div className="flex items-center gap-1">
                    <IoMdTime className="size-6" />
                    <div>Last Edited</div>
                </div>
                <div>29 Oct 2024</div>
            </div>
            <div className="mt-6">
                <p>
                    Some text here to show the content of the note. This content
                    is just a placeholder and does not have any meaning. Some
                    text here to show the content of the note.
                </p>
                <p>
                    This content is just a placeholder and does not have any
                    meaning. Some text here to show the content of the note.
                    This content is just a placeholder and does not have any
                    meaning. Some text here to show the content of
                </p>
                <p>
                    This content is just a placeholder and does not have any
                    meaning. Some text here to show the content of the note.
                    This content is just a placeholder and does not have any
                    meaning. Some text here to show the content of
                </p>
                <p>
                    This content is just a placeholder and does not have any
                    meaning. Some text here to show the content of
                </p>
            </div>
        </div>
    );
};
