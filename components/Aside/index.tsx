"use client";

import Image from "next/image";
import { IoHomeOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { HiOutlineTag } from "react-icons/hi2";
import Link from "next/link";
import { AsideProps } from "./aside.props";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getActiveTab } from "./getActiveTab";

export const Aside = ({ pathname }: AsideProps) => {
    const clientPathname = usePathname();

    const [activeTab, setActiveTab] = useState<"all" | "archived" | "">(
        getActiveTab(pathname),
    );

    useEffect(() => {
        setActiveTab(getActiveTab(clientPathname));
    }, [clientPathname]);

    return (
        <aside className="w-full px-4 pt-4 text-gray-600 border-r-2 border-gray-200">
            <div className="border-b-2 border-gray-200 pb-4">
                <Image
                    src="/icons/logo.png"
                    width={192}
                    height={70}
                    alt="Logo"
                />
                <Link
                    className={`mt-6 p-2 px-4 flex justify-between items-center rounded-md
                    text-gray-800 hover:bg-blue-50 hover:text-gray-800 ${
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
                    text-gray-800 hover:bg-blue-50 hover:text-gray-800 ${
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
                <Link
                    className="mt-4 flex items-center gap-2 text-gray-500"
                    href="/tags/cooking"
                >
                    <HiOutlineTag className="size-5" />
                    <span className="font-medium">Cooking</span>
                </Link>
                <Link
                    className="mt-4 flex items-center gap-2 text-gray-500 "
                    href="/tags/food"
                >
                    <HiOutlineTag className="size-5" />
                    <span className="font-medium">Food</span>
                </Link>
                <Link
                    className="mt-4 flex items-center gap-2 text-gray-500 "
                    href="/tags/tech"
                >
                    <HiOutlineTag className="size-5" />
                    <span className="font-medium">Tech</span>
                </Link>
                <Link
                    className="mt-4 flex items-center gap-2 text-gray-500 "
                    href="/tags/programming"
                >
                    <HiOutlineTag className="size-5" />
                    <span className="font-medium">Programming</span>
                </Link>
                <Link
                    className="mt-4 flex items-center gap-2 text-gray-500 "
                    href="/tags/css"
                >
                    <HiOutlineTag className="size-5" />
                    <span className="font-medium">CSS</span>
                </Link>
            </div>
        </aside>
    );
};
