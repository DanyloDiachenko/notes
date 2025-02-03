import { FaRegFileArchive } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { Category } from "./category.interface";

export const categories: Category[] = [
    {
        title: "All Notes",
        icon: <IoHomeOutline />,
        type: "all",
    },
    {
        title: "Archived Notes",
        icon: <FaRegFileArchive />,
        type: "archived",
    },
];
