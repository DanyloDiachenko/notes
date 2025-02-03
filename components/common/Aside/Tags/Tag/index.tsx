"use client";

import { Actions } from "./Actions";
import { usePathname, useSearchParams } from "next/navigation";
import { HiOutlineTag } from "react-icons/hi2";
import { TagProps } from "./tag.props";
import Link from "next/link";
import { cn } from "@/helpers/cn";

export const Tag = ({ tag }: TagProps) => {
    const clientPathname = usePathname();
    const tagSearchParam = useSearchParams().get("tag");

    const tagHref = `${
        clientPathname.includes("archived") ? "/archived" : "/all"
    }?tag=${tag.slug}`;

    return (
        <div className={`mt-4 flex items-center justify-between`}>
            <Link
                className={cn(
                    "flex items-center gap-2 text-gray-500 duration-300",
                    tagSearchParam === tag.slug ? "text-[#7351f5]" : "",
                )}
                href={tagHref}
            >
                <HiOutlineTag className="size-5" />
                <span className="font-medium">{tag.title}</span>
            </Link>
            <Actions tag={tag} />
        </div>
    );
};
