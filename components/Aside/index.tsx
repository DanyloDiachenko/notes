"use client";

import Image from "next/image";
import { HiOutlineTag } from "react-icons/hi2";
import Link from "next/link";
import { AsideProps } from "./aside.props";
import { usePathname, useSearchParams } from "next/navigation";
import { Categories } from "./Categories";

const tags = [
    { title: "Cooking", slug: "cooking" },
    { title: "Food", slug: "food" },
    { title: "Tech", slug: "tech" },
    { title: "Programming", slug: "programming" },
    { title: "CSS", slug: "css" },
];

export const Aside = ({ pathname }: AsideProps) => {
    const clientPathname = usePathname();
    const tagSearchParam = useSearchParams().get("tag");

    return (
        <aside className="w-full px-4 pt-4 text-gray-600 border-r-2 border-gray-200">
            <div className="border-b-2 border-gray-200 pb-4">
                <Link href="/">
                    <Image
                        src="/icons/logo.png"
                        width={192}
                        height={70}
                        alt="Logo"
                    />
                </Link>
                <Categories pathname={pathname} />
            </div>
            <div className="px-4 mt-2">
                <div className="text-gray-500 font-semibold">Tags</div>
                {tags.map((tag, index) => (
                    <Link
                        key={index}
                        className={`mt-4 flex items-center gap-2 text-gray-500 duration-0`}
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
                ))}
            </div>
        </aside>
    );
};
