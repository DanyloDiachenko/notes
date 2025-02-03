import { PageProps } from "@/.next/types/app/page";
import { getNote } from "@/api/notes.api";
import { NoteActions } from "@/components/pageComponents/noteDetails/Actions";
import { NoteDetails } from "@/components/pageComponents/noteDetails/Details";
import { Note as INote } from "@/types/note.interface";
import { notFound } from "next/navigation";

const Note = async ({ params }: PageProps) => {
    const paramsData = await params;

    const noteId = paramsData.noteId;
    const noteType = paramsData.type;

    let note: null | INote = null;

    await (async () => {
        try {
            const noteData = await getNote(noteId);

            if (noteData.message) {
                notFound();
            }

            if (noteData.id) {
                note = noteData;
            }
        } catch (error) {
            console.log(error);
            notFound();
        }
    })();

    if (!note) {
        return <></>;
    }

    return (
        <>
            <NoteDetails note={note} />
            <NoteActions note={note} noteType={noteType} />
        </>
    );
};

export default Note;
