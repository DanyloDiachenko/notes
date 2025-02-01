import { getNote } from "@/api/notes";
import { NoteActions } from "@/components/pageComponents/noteDetails/Actions";
import { NoteDetails } from "@/components/pageComponents/noteDetails/Details";
import { Note as INote } from "@/types/note.interface";
import { notFound } from "next/navigation";

const Note = async ({ params }: { params: { noteId: string } }) => {
    const noteId = params.noteId;
    let note: null | INote = null;

    await (async () => {
        try {
            const noteData = await getNote(noteId);
            console.log(noteData);

            if (noteData.message) {
                notFound();
            }

            if (noteData.id) {
                note = noteData;
            }
        } catch (error) {
            console.log("error", error);
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
