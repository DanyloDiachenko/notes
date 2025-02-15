import { HiOutlineTag } from "react-icons/hi2";
import { IoMdTime } from "react-icons/io";
import { NoteDetailsProps } from "./noteDetails.props";
import { formatDate } from "@/helpers/formatDate";

export const NoteDetails = ({ note }: NoteDetailsProps) => {
    return (
        <div className="xl:p-8 xl:px-4 sm:p-4 p-2 sm:border-r-2 border-gray-200 font-medium text-sm sm:text-base">
            <h2 className="font-bold text-xl sm:text-3xl">{note.title}</h2>
            <div className="sm:mt-6 mt-3 grid grid-cols-[150px_auto]">
                <div className="flex items-center gap-1">
                    <HiOutlineTag className="size-6" />
                    <div>Tags</div>
                </div>
                <div>
                    {note.tags.map(
                        (tag, index) =>
                            `${tag.title}${
                                note.tags.length - 1 !== index ? ", " : ""
                            }`,
                    )}
                </div>
            </div>
            <div className="sm:mt-3 mt-2 grid grid-cols-[150px_auto] border-b-2 border-gray-200 pb-6">
                <div className="flex items-center gap-1">
                    <IoMdTime className="size-6" />
                    <div>Last Edited</div>
                </div>
                <div>{formatDate(note.updatedAt)}</div>
            </div>
            <p className="sm:mt-6 mt-4 mb-12">{note.content}</p>
        </div>
    );
};
