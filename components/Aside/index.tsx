"use client";

import Image from "next/image";
import { IoHomeOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { HiOutlineTag } from "react-icons/hi2";
import Link from "next/link";
import { AsideProps } from "./aside.props";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getActiveTab } from "./getActiveTab";

const tags = [
    { title: "Cooking", slug: "cooking" },
    { title: "Food", slug: "food" },
    { title: "Tech", slug: "tech" },
    { title: "Programming", slug: "programming" },
    { title: "CSS", slug: "css" },
];

export const Aside = ({ pathname }: AsideProps) => {
    const clientPathname = usePathname();
    const tagParams = useSearchParams().get("tag");

    const [activeTab, setActiveTab] = useState<"all" | "archived" | "">(
        getActiveTab(pathname),
    );

    useEffect(() => {
        setActiveTab(getActiveTab(clientPathname));
    }, [clientPathname]);
    console.log(tagParams);

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
                <Link
                    className={`mt-6 p-2 px-4 flex justify-between items-center rounded-md
                    text-gray-800 hover:bg-blue-50 hover:text-gray-800 duration-300 ${
                        activeTab === "all"
                            ? "bg-blue-100 hover:bg-blue-100"
                            : ""
                    }`}
                    href="/all"
                >
                    <div className="flex items-center">
                        <IoHomeOutline className="text-blue-800" />
                        <span className="ml-2 font-medium">All Notes</span>
                    </div>
                    {activeTab === "all" && <FaArrowRight />}
                </Link>
                <Link
                    className={`mt-6 p-2 px-4 flex justify-between items-center rounded-md
                    text-gray-800 hover:bg-blue-50 hover:text-gray-800 duration-300 ${
                        activeTab === "archived"
                            ? "bg-blue-100 hover:bg-blue-100"
                            : ""
                    }`}
                    href="/archived"
                >
                    <div className="flex items-center">
                        <IoHomeOutline />
                        <span className="ml-2 font-medium">Archived Notes</span>
                    </div>
                    {activeTab === "archived" && <FaArrowRight />}
                </Link>
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
                                tagParams === tag.slug ? "text-[#7351f5]" : ""
                            }`}
                        />
                        <span
                            className={`font-medium duration-300 ${
                                tagParams === tag.slug ? "text-[#7351f5]" : ""
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
