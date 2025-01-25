import { NoteActions } from "@/components/NoteActions";
import { NoteDetails } from "@/components/NoteDetails";

export const Note = () => {
    return (
        <>
            <NoteDetails />
            <NoteActions />
        </>
    );
};

export default Note;
