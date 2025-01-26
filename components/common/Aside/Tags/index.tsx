"use client";

import Link from "next/link";
import { TagsProps } from "./tags.props";
import { usePathname, useSearchParams, useParams } from "next/navigation";
import { HiOutlineTag } from "react-icons/hi2";

export const Tags = ({ tags }: TagsProps) => {
    const clientPathname = usePathname();
    const tagSearchParam = useSearchParams().get("tag");

    return (
        <div className="px-4 mt-2">
            <div className="text-gray-500 font-semibold">Tags</div>
            {tags.map((tag, index) => (
                <Link
                    key={index}
                    className={`mt-4 flex items-center gap-2 text-gray-500 duration-0`}
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
            ))}
        </div>
    );
};
