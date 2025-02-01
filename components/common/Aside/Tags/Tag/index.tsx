"use client";

import { Actions } from "./Actions";
import { usePathname, useSearchParams } from "next/navigation";
import { HiOutlineTag } from "react-icons/hi2";
import { TagProps } from "./tag.props";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const Tag = ({ tag }: TagProps) => {
    const router = useRouter();
    const clientPathname = usePathname();
    const tagSearchParam = useSearchParams().get("tag");

    const tagHref = `${
        clientPathname.includes("archived") ? "/archived" : "/all"
    }?tag=${tag.slug}`;

    return (
        <div className={`mt-4 flex items-center justify-between`}>
            <Link
                className="flex items-center gap-2 duration-0 text-gray-500"
                href={tagHref}
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
