"use client";

import { FaSearch } from "react-icons/fa";
import { HeaderProps } from "./Header.props";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getHeadingText } from "./getHeadingText";
import { IoIosLogIn } from "react-icons/io";
import { setOpenedModal } from "@/store/slices/openedModal";
import { Button } from "@/components/ui/Button";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { selectSearchNote, setSearchNote } from "@/store/slices/searchNote";
import { Modal } from "@/types/modal.enum";
import { MdLogout } from "react-icons/md";
import { setCookie } from "@/helpers/setCookie";
import { toast } from "react-toastify";
import { cn } from "@/helpers/cn";

export const Header = ({ pathname, isAuthorized }: HeaderProps) => {
    const dispatch = useAppDispatch();
    const clientPathname = usePathname();
    const router = useRouter();

    const searchNote = useAppSelector(selectSearchNote);

    const [headingText, setHeadeingText] = useState(getHeadingText(pathname));

    const onLoginClick = () => {
        dispatch(setOpenedModal(Modal.Authorization));
    };

    const onLogoutClick = () => {
        setCookie("token", "");
        router.push("/");
        router.refresh();
        toast.success("You have successfully logged out");
    };

    const setSearchNoteHandler = (search: string) => {
        if (clientPathname === "/") {
            router.push("/all");
        }

        dispatch(setSearchNote(search));
    };

    useEffect(() => {
        setHeadeingText(getHeadingText(clientPathname));
    }, [clientPathname]);

    return (
        <header className="xl:p-8 pt-10 px-4 pb-4 flex justify-between items-center border-b-2 border-gray-200">
            <h1 className="font-bold sm:text-4xl text-2xl">{headingText}</h1>
            <div
                className={cn(
                    "flex items-center gap-4",
                    isAuthorized &&
                        "flex-col xl:flex-row gap-2 xl:gap-4 justify-end xl:justify-normal",
                )}
            >
                {isAuthorized && (
                    <div className="relative max-w-[300px] w-full">
                        <input
                            type="text"
                            className="w-full border-2 border-gray-200 rounded-md p-2 sm:pl-8 pl-7 text-sm sm:text-base"
                            placeholder="Search in..."
                            value={searchNote}
                            onChange={(e) =>
                                setSearchNoteHandler(e.target.value)
                            }
                        />
                        <FaSearch className="absolute left-2 top-3 sm:size-5 size-4 opacity-20" />
                    </div>
                )}
                <Button
                    color="gray"
                    onClick={
                        isAuthorized
                            ? () => onLogoutClick()
                            : () => onLoginClick()
                    }
                    className="sm:p-2 p-1 w-auto sm:px-5 px-3 gap-2 ml-auto"
                >
                    {isAuthorized ? (
                        <>
                            <MdLogout className="sm:size-6 size-4 text-gray-400" />
                            Logout
                        </>
                    ) : (
                        <>
                            <IoIosLogIn className="sm:size-6 size-4 text-gray-400" />
                            Authorization
                        </>
                    )}
                </Button>
            </div>
        </header>
    );
};
