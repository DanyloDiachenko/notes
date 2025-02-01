import { PageProps } from "@/.next/types/app/page";
import { getNote } from "@/api/notes";
import { NoteActions } from "@/components/pageComponents/noteDetails/Actions";
import { NoteDetails } from "@/components/pageComponents/noteDetails/Details";
import { Note as INote } from "@/types/note.interface";
import { notFound } from "next/navigation";

const Note = async ({ params }: PageProps) => {
    const noteId = (await params).noteId;
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
            <NoteActions note={note} />
        </>
    );
};

export default Note;
