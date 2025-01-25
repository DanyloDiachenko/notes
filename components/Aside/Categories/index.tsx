"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { getActiveTab } from "../getActiveTab";
import { FaArrowRight } from "react-icons/fa";
import { CategoriesProps } from "./categories.props";

export const Categories = ({ pathname }: CategoriesProps) => {
    const clientPathname = usePathname();

    const [activeTab, setActiveTab] = useState<"all" | "archived" | "">(
        getActiveTab(pathname),
    );

    useEffect(() => {
        setActiveTab(getActiveTab(clientPathname));
    }, [clientPathname]);

    return (
        <>
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
                className={`mt-2 p-2 px-4 flex justify-between items-center rounded-md
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
        </>
    );
};
