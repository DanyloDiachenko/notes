"use client";

import Image from "next/image";
import Link from "next/link";
import { AsideProps } from "./Aside.props";
import { Categories } from "./Categories";
import { Tags } from "./Tags";
import { Button } from "@/components/ui/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { cn } from "@/helpers/cn";
import { IoMdClose } from "react-icons/io";

export const Aside = ({ isAuthorized, pathname, tags }: AsideProps) => {
    const [isAsideOpened, setIsAsideOpened] = useState(false);

    return (
        <>
            <Button
                className="absolute xl:hidden w-auto p-3 top-2 left-2 z-30"
                color="purple"
                onClick={() => setIsAsideOpened(true)}
                name="Open aside"
                aria-label="Open menu"
                aria-expanded={isAsideOpened}
                aria-controls="mobile-menu"
            >
                <GiHamburgerMenu className="size-4" />
            </Button>

            <div
                className={cn(
                    "fixed inset-0 bg-black duration-300 z-20",
                    isAsideOpened
                        ? "bg-opacity-50"
                        : "bg-opacity-0 pointer-events-none",
                )}
                onClick={() => setIsAsideOpened(false)}
                aria-hidden={!isAsideOpened}
            ></div>
            <aside
                id="mobile-menu"
                className={cn(
                    "fixed top-0 left-0 h-full w-[280px] bg-gray-100 xl:bg-white shadow-lg xl:border-r-2 border-gray-200 transition-transform duration-300 z-30 xl:static border-0 xl:w-auto xl:shadow-none",
                    isAsideOpened
                        ? "translate-x-0"
                        : "-translate-x-full xl:translate-x-0",
                )}
                role="menu"
                aria-hidden={!isAsideOpened}
            >
                <Button
                    className="absolute xl:hidden w-auto !p-1 top-2 right-2"
                    color="gray"
                    onClick={() => setIsAsideOpened(false)}
                    name="Close aside"
                    aria-label="Close menu"
                >
                    <IoMdClose className="size-5 text-gray-500" />
                </Button>
                <div className="border-b-2 border-gray-200 pb-4 px-2 sm:px-2">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            width={192}
                            height={70}
                            alt="Logo"
                            className="max-sm:max-w-[150px]"
                        />
                    </Link>
                    <Categories
                        pathname={pathname}
                        isAuthorized={isAuthorized}
                    />
                </div>
                <Tags tags={tags} />
            </aside>
        </>
    );
};
