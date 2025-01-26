import { NoteActions } from "@/components/NoteActions";
import { NoteDetails } from "@/components/NoteDetails";
import { Note as INote } from "@/interfaces/note.interface";

export const Note = () => {
    const note: INote = {
        id: "1",
        title: "Note title",
        tags: [
            {
                id: "123",
                title: "Tag 1",
                slug: "tag-1",
            },
            {
                id: "fds",
                title: "Tag 2",
                slug: "tag-2",
            },
        ],
        updatedAt: "29 Oct 2024",
        content:
            "<p>Some text here to show the content of the note. This contentis just a placeholder and does not have any meaning. Some text here to show the content of the note.</p><p>This content is just a placeholder and does not have any meaning. Some text here to show the content of the note. This content is just a placeholder and does not have any meaning. Some text here to show the content of</p><p>This content is just a placeholder and does not have any meaning. Some text here to show the content of the note. This content is just a placeholder and does not have any meaning. Some text here to show the content of</p><p>This content is just a placeholder and does not have any meaning. Some text here to show the content of</p>",
    };

    return (
        <>
            <NoteDetails note={note} />
            <NoteActions note={note} />
        </>
    );
};

export default Note;
