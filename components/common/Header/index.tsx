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
        <header className="p-8 flex justify-between items-center border-b-2 border-gray-200">
            <h1 className="font-bold text-4xl">{headingText}</h1>
            <div className="flex items-center gap-4">
                {isAuthorized && (
                    <div className="relative w-[300px]">
                        <input
                            type="text"
                            className="w-full border-2 border-gray-200 rounded-md p-2 pl-8"
                            placeholder="Search in..."
                            value={searchNote}
                            onChange={(e) =>
                                setSearchNoteHandler(e.target.value)
                            }
                        />
                        <FaSearch className="absolute left-2 top-3 size-5 opacity-20" />
                    </div>
                )}
                <Button
                    color="gray"
                    onClick={
                        isAuthorized
                            ? () => onLogoutClick()
                            : () => onLoginClick()
                    }
                    className="p-2 w-auto px-5 gap-2"
                >
                    {isAuthorized ? (
                        <>
                            <MdLogout className="size-6 text-gray-400" />
                            Logout
                        </>
                    ) : (
                        <>
                            <IoIosLogIn className="size-6 text-gray-400" />
                            Authorization
                        </>
                    )}
                </Button>
            </div>
        </header>
    );
};
