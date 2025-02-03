import { getNotes } from "@/api/notes.api";
import { NoteList } from "@/components/pageComponents/notesType/NoteList";
import { getPathname } from "@/helpers/getPathname";
import { Note } from "@/types/note.interface";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

const NoteTypeLayout = async ({
    children,
    params,
}: {
    children: ReactNode;
    params: Promise<{ type: string }>;
}) => {
    const pathname = await getPathname();
    const paramsData = await params;

    const notesType = paramsData.type;

    const tag =
        new URLSearchParams(new URL(pathname).search).get("tag") || undefined;

    switch (notesType) {
        case "all": {
            break;
        }
        case "archived": {
            break;
        }
        default: {
            return notFound();
        }
    }

    const serverNotes: Note[] = await getNotes({
        notesType: notesType,
        tag: tag,
    });

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
