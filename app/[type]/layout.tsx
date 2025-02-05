import { getNotes } from "@/api/notes.api";
import { NoteList } from "@/components/page-components/notes-type/NoteList";
import { getPathname } from "@/helpers/getPathname";
import { Note } from "@/types/note.interface";
import { NotesType } from "@/types/notesType.enum";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

interface NoteTypeLayoutProps {
    children: ReactNode;
    params: Promise<{ type: string }>;
}

const NoteTypeLayout = async ({ children, params }: NoteTypeLayoutProps) => {
    const pathname = await getPathname();
    const paramsData = await params;

    const notesType = paramsData.type as NotesType;

    const tag =
        new URLSearchParams(new URL(pathname).search).get("tag") || undefined;

    if (notesType !== "all" && notesType !== "archived") {
        return notFound();
    }

    const serverNotes = (await getNotes({
        notesType: notesType,
        tag: tag,
    })) as Note[];

    return (
        <>
            <div className="grid grid-cols-[0.25fr_0.5fr_0.25fr]">
                <NoteList serverNotes={serverNotes} notesType={notesType} />
                {children}
            </div>
        </>
    );
};

export default NoteTypeLayout;
