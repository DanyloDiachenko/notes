"use client";

import Link from "next/link";
import { Actions } from "./Actions";
import { useDispatch } from "react-redux";
import { usePathname, useSearchParams } from "next/navigation";
import { Modal } from "@/interfaces/common/modal.type";
import { setOpenedModal } from "@/store/slices/openedModal";
import { setTagToEdit } from "@/store/slices/tagToEdit";
import { Tag as ITag } from "@/interfaces/common/tag.interface";
import { HiOutlineTag } from "react-icons/hi2";
import { TagProps } from "./tag.props";

export const Tag = ({ tag }: TagProps) => {
    const dispatch = useDispatch();
    const clientPathname = usePathname();
    const tagSearchParam = useSearchParams().get("tag");

    return (
        <div className={`mt-4 flex items-center justify-between`}>
            <Link
                className="flex items-center gap-2 duration-0 text-gray-500"
                href={`${
                    clientPathname.includes("all") ? "/all" : "/archived"
                }?tag=${tag.slug}`}
            >
                <HiOutlineTag
                    className={`size-5 duration-300 ${
                        tagSearchParam === tag.slug ? "text-[#7351f5]" : ""
                    }`}
                />
                <span
                    className={`font-medium duration-300 ${
                        tagSearchParam === tag.slug ? "text-[#7351f5]" : ""
                    }`}
                >
                    {tag.title}
                </span>
            </Link>
            <Actions tag={tag} />
        </div>
    );
};
