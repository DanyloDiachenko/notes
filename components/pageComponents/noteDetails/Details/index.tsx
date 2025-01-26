import { HiOutlineTag } from "react-icons/hi2";
import { IoMdTime } from "react-icons/io";
import { NoteDetailsProps } from "./noteDetails.props";

export const NoteDetails = ({ note }: NoteDetailsProps) => {
    return (
        <div className="p-8 px-4 border-r-2 border-gray-200">
            <h2 className="font-bold text-3xl">{note.title}</h2>
            <div className="mt-6 grid grid-cols-[150px_auto] font-medium">
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
            <div className="mt-3 grid grid-cols-[150px_auto] font-medium border-b-2 border-gray-200 pb-6">
                <div className="flex items-center gap-1">
                    <IoMdTime className="size-6" />
                    <div>Last Edited</div>
                </div>
                <div>{note.updatedAt}</div>
            </div>
            <div className="mt-6">
                <div
                    dangerouslySetInnerHTML={{
                        __html: note.content,
                    }}
                />
            </div>
        </div>
    );
};
