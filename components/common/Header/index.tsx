"use client";

import { FaSearch } from "react-icons/fa";
import { HeaderProps } from "./header.props";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getHeadingText } from "./getHeadingText";
import { IoIosLogIn } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setOpenedModal } from "@/store/slices/openedModal";
import { Button } from "@/components/ui/Button";
import { RootState } from "@/store/store";
import { setSearchNote } from "@/store/slices/searchNote";

export const Header = ({ pathname, isAuthorized }: HeaderProps) => {
    const dispatch = useDispatch();
    const clientPathname = usePathname();
    const router = useRouter();

    const searchNote = useSelector(
        (state: RootState) => state.searchNote.search,
    );

    const [headingText, setHeadeingText] = useState(getHeadingText(pathname));

    const onLoginClick = () => {
        dispatch(setOpenedModal("authorization"));
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
                {!isAuthorized && (
                    <Button
                        color="gray"
                        onClick={onLoginClick}
                        className="p-2 w-auto px-5 gap-2"
                    >
                        <IoIosLogIn className="size-6 text-gray-400" />
                        Authorization
                    </Button>
                )}
            </div>
        </header>
    );
};
