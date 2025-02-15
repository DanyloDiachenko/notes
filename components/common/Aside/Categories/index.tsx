"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { CategoriesProps } from "./Categories.props";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { NotesType } from "@/types/notesType.enum";
import { getActiveTab } from "./getActiveTab";
import { categories } from "./categories";
import { cn } from "@/helpers/cn";

export const Categories = ({ pathname, isAuthorized }: CategoriesProps) => {
    const clientPathname = usePathname();
    const router = useRouter();

    const [activeTab, setActiveTab] = useState<NotesType | "">(
        getActiveTab(pathname),
    );

    const onTabClick = (tab: NotesType) => {
        if (!isAuthorized) {
            toast.error("Authorize first");
            return;
        }

        router.push(`/${tab}`, { scroll: false });
    };

    useEffect(() => {
        setActiveTab(getActiveTab(clientPathname));
    }, [clientPathname]);

    return (
        <>
            {categories.map((category, index) => (
                <button
                    key={index}
                    className={cn(
                        "mt-4 sm:mt-6 p-2 px-2 sm:px-4 flex justify-between w-full items-center rounded-md",
                        "text-gray-800 hover:bg-blue-50 hover:text-gray-800 duration-500 last:mt-2",
                        activeTab === category.type
                            ? "bg-blue-100 hover:bg-blue-100"
                            : "",
                    )}
                    onClick={() => onTabClick(category.type)}
                >
                    <div className="flex items-center">
                        {category.icon}
                        <span className="ml-2 font-medium">
                            {category.title}
                        </span>
                    </div>
                    {activeTab === category.type && <FaArrowRight />}
                </button>
            ))}
        </>
    );
};
