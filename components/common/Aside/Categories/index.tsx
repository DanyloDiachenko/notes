"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { getActiveTab } from "../getActiveTab";
import { FaArrowRight } from "react-icons/fa";
import { CategoriesProps } from "./categories.props";
import { FaRegFileArchive } from "react-icons/fa";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export const Categories = ({ pathname, isAuthorized }: CategoriesProps) => {
    const clientPathname = usePathname();
    const router = useRouter();
    const tagSearchParam = useSearchParams().get("tag");

    const [activeTab, setActiveTab] = useState<"all" | "archived" | "">(
        getActiveTab(pathname),
    );

    const onTabClick = (tab: "all" | "archived") => {
        if (!isAuthorized) {
            toast.error("Authorize first");
            return;
        }

        router.push(`/${tab}${tagSearchParam ? `?tag=${tagSearchParam}` : ""}`);
    };

    useEffect(() => {
        setActiveTab(getActiveTab(clientPathname));
    }, [clientPathname]);

    return (
        <>
            <button
                className={`mt-6 p-2 px-4 flex justify-between w-full items-center rounded-md
                    text-gray-800 hover:bg-blue-50 hover:text-gray-800 duration-300 ${
                        activeTab === "all"
                            ? "bg-blue-100 hover:bg-blue-100"
                            : ""
                    }`}
                onClick={() => onTabClick("all")}
            >
                <div className="flex items-center">
                    <IoHomeOutline />
                    <span className="ml-2 font-medium">All Notes</span>
                </div>
                {activeTab === "all" && <FaArrowRight />}
            </button>
            <button
                className={`mt-2 p-2 px-4 flex justify-between w-full items-center rounded-md
                    text-gray-800 hover:bg-blue-50 hover:text-gray-800 duration-300 ${
                        activeTab === "archived"
                            ? "bg-blue-100 hover:bg-blue-100"
                            : ""
                    }`}
                onClick={() => onTabClick("archived")}
            >
                <div className="flex items-center">
                    <FaRegFileArchive />
                    <span className="ml-2 font-medium">Archived Notes</span>
                </div>
                {activeTab === "archived" && <FaArrowRight />}
            </button>
        </>
    );
};
