"use client";

import Link from "next/link";
import { TagsProps } from "./tags.props";
import { usePathname, useSearchParams } from "next/navigation";
import { HiOutlineTag } from "react-icons/hi2";
import { AddTag } from "./AddTag";
import { Actions } from "./Actions";
import { useDispatch } from "react-redux";
import { Modal } from "@/interfaces/common/modal.type";
import { setOpenedModal } from "@/store/slices/openedModal";
import { Tag } from "@/interfaces/common/tag.interface";
import { setTagToEdit } from "@/store/slices/tagToEdit";

export const Tags = ({ tags }: TagsProps) => {
    const dispatch = useDispatch();
    const clientPathname = usePathname();
    const tagSearchParam = useSearchParams().get("tag");

    const setOpenedModalHandler = (modalToOpen: Modal) => {
        dispatch(setOpenedModal(modalToOpen));
    };

    const setTagToEditHandler = (tag: Tag) => {
        dispatch(setTagToEdit(tag));
    };

    const onEditClickTagCallback = (tag: Tag) => {
        setOpenedModalHandler("editTag");
        setTagToEditHandler(tag);
    };

    return (
        <div className="px-4 mt-2 text-gray-500">
            <div className="font-semibold">Tags</div>
            {tags.length ? (
                tags.map((tag, index) => (
                    <div
                        key={index}
                        className={`mt-4 flex items-center justify-between`}
                    >
                        <Link
                            className="flex items-center gap-2 duration-0 text-gray-500"
                            href={`${
                                clientPathname.includes("all")
                                    ? "/all"
                                    : "/archived"
                            }?tag=${tag.slug}`}
                        >
                            <HiOutlineTag
                                className={`size-5 duration-300 ${
                                    tagSearchParam === tag.slug
                                        ? "text-[#7351f5]"
                                        : ""
                                }`}
                            />
                            <span
                                className={`font-medium duration-300 ${
                                    tagSearchParam === tag.slug
                                        ? "text-[#7351f5]"
                                        : ""
                                }`}
                            >
                                {tag.title}
                            </span>
                        </Link>
                        <Actions
                            onEditClickTagCallback={() =>
                                onEditClickTagCallback(tag)
                            }
                        />
                    </div>
                ))
            ) : (
                <div className="mt-4 font-medium">Nothing here...</div>
            )}
            <AddTag />
        </div>
    );
};
