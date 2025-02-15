import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/common/Header";
import { Aside } from "@/components/common/Aside";
import { getPathname } from "@/helpers/getPathname";
import { ReduxProvider } from "@/components/providers/Redux";
import { Modals } from "@/components/modals";
import { getCookie } from "@/helpers/getCookie";
import { getProfile } from "@/api/auth.api";
import { ToastProvider } from "@/components/providers/Toast";
import { ReactNode } from "react";
import { cn } from "@/helpers/cn";
import { Tag } from "@/types/tag.interface";
import { getTags } from "@/api/tags.api";
import { Tag as ITag } from "@/types/tag.interface";

const inter = Inter({
    variable: "--font-inter",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    preload: true,
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "NotesApp – Зберігайте свої нотатки та замітки онлайн!",
    description:
        "Зручний сервіс для зберігання нотаток та заміток. Створюйте, редагуйте та видаляйте нотатки онлайн! Фільтруйте та шукайте нотатки за тегами.",
    openGraph: {
        title: "NotesApp – Зберігайте свої нотатки та замітки онлайн!",
        description:
            "Зручний сервіс для зберігання нотаток та заміток. Створюйте, редагуйте та видаляйте нотатки онлайн! Фільтруйте та шукайте нотатки за тегами.",
        type: "website",
        url: "https://self-notes-app.vercel.app/",
        images: [
            {
                url: "https://self-notes-app.vercel.app/logo.png",
                width: 2448,
                height: 896,
                alt: "NotesApp – Зберігайте свої нотатки та замітки онлайн!",
            },
        ],
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.json",
};

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout = async ({ children }: Readonly<RootLayoutProps>) => {
    const pathname = await getPathname();
    const token = await getCookie("token");
    let tags: Tag[] = [];

    let isAuthorized;

    if (!token || !token.length) {
        isAuthorized = false;
    } else {
        try {
            const profile = await getProfile();

            if ("email" in profile) {
                isAuthorized = true;
            } else {
                isAuthorized = false;
            }
        } catch (error) {
            console.log(error);
            isAuthorized = false;
        }
    }

    if (isAuthorized) {
        try {
            tags = (await getTags()) as ITag[];
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <html lang="en">
            <body
                className={cn(
                    inter.variable,
                    "antialiased grid grid-cols-1fr xl:grid-cols-[minmax(200px,_280px)_1fr]",
                )}
            >
                <ReduxProvider>
                    <Aside
                        isAuthorized={isAuthorized}
                        pathname={pathname}
                        tags={tags}
                    />
                    <main className="w-full">
                        <Header
                            pathname={pathname}
                            isAuthorized={isAuthorized}
                        />
                        {children}
                    </main>
                    <Modals />
                    <ToastProvider />
                </ReduxProvider>
            </body>
        </html>
    );
};

export default RootLayout;
