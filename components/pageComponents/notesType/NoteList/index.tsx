import { CreateNote } from "./Create";
import { Note } from "@/types/note.interface";
import { Note as NoteComponent } from "./Note";
import { NoteListProps } from "./noteList.props";
import { getNotes } from "@/api/notes";

/* const notes: Note[] = [
    {
        id: "1",
        title: "React Perfomance Optmization",
        tags: [
            {
                id: "1",
                title: "React",
                slug: "Dev",
            },
            {
                id: "2",
                title: "React",
                slug: "Dev",
            },
        ],
        updatedAt: "29 Oct 2024",
        content:
            "<p>Some text here to show the content of the note. This contentis just a placeholder and does not have any meaning. Some text here to show the content of the note. This content is just a placeholder and does not have any meaning. Some text here to show the content of the note. This content is just a placeholder and does not have any meaning. Some text here to show the content of</p><p>This content is just a placeholder and does not have any meaning. Some text here to show the content of the note. This content is just a placeholder and does not have any meaning. Some text here to show the content of</p><p>This content is just a placeholder and does not have any meaning. Some text here to show the content of the note. This content is just a placeholder and does not have any meaning. Some text here to show the content of</p><p>This content is just a placeholder and does not have any meaning. Some text here to show the content of</p>",
    },
    {
        id: "1",
        title: "React Perfomance Optmization",
        tags: [
            {
                id: "1",
                title: "React",
                slug: "Dev",
            },
            {
                id: "2",
                title: "React",
                slug: "Dev",
            },
        ],
        updatedAt: "29 Oct 2024",
        content:
            "<p>Some text here to show the content of the note. This contentis just a placeholder and does not have any meaning. Some text here to show the content of the note. This content is just a placeholder and does not have any meaning. Some text here to show the content of the note. This content is just a placeholder and does not have any meaning. Some text here to show the content of</p><p>This content is just a placeholder and does not have any meaning. Some text here to show the content of the note. This content is just a placeholder and does not have any meaning. Some text here to show the content of</p><p>This content is just a placeholder and does not have any meaning. Some text here to show the content of the note. This content is just a placeholder and does not have any meaning. Some text here to show the content of</p><p>This content is just a placeholder and does not have any meaning. Some text here to show the content of</p>",
    },
    {
        id: "1",
        title: "React Perfomance Optmization",
        tags: [
            {
                id: "1",
                title: "React",
                slug: "Dev",
            },
            {
                id: "2",
                title: "React",
                slug: "Dev",
            },
        ],
        updatedAt: "29 Oct 2024",
        content:
            "<p>Some text here to show the content of the note. This contentis just a placeholder and does not have any meaning. Some text here to show the content of the note. This content is just a placeholder and does not have any meaning. Some text here to show the content of the note. This content is just a placeholder and does not have any meaning. Some text here to show the content of</p><p>This content is just a placeholder and does not have any meaning. Some text here to show the content of the note. This content is just a placeholder and does not have any meaning. Some text here to show the content of</p><p>This content is just a placeholder and does not have any meaning. Some text here to show the content of the note. This content is just a placeholder and does not have any meaning. Some text here to show the content of</p><p>This content is just a placeholder and does not have any meaning. Some text here to show the content of</p>",
    },
    {
        id: "1",
        title: "React Perfomance Optmization",
        tags: [
            {
                id: "1",
                title: "React",
                slug: "Dev",
            },
            {
                id: "2",
                title: "React",
                slug: "Dev",
            },
        ],
        updatedAt: "29 Oct 2024",
        content:
            "<p>Some text here to show the content of the note. This contentis just a placeholder and does not have any meaning. Some text here to show the content of the note. This content is just a placeholder and does not have any meaning. Some text here to show the content of the note. This content is just a placeholder and does not have any meaning. Some text here to show the content of</p><p>This content is just a placeholder and does not have any meaning. Some text here to show the content of the note. This content is just a placeholder and does not have any meaning. Some text here to show the content of</p><p>This content is just a placeholder and does not have any meaning. Some text here to show the content of the note. This content is just a placeholder and does not have any meaning. Some text here to show the content of</p><p>This content is just a placeholder and does not have any meaning. Some text here to show the content of</p>",
    },
    {
        id: "1",
        title: "React Perfomance Optmization",
        tags: [
            {
                id: "1",
                title: "React",
                slug: "Dev",
            },
            {
                id: "2",
                title: "React",
                slug: "Dev",
            },
        ],
        updatedAt: "29 Oct 2024",
        content:
            "<p>Some text here to show the content of the note. This contentis just a placeholder and does not have any meaning. Some text here to show the content of the note. This content is just a placeholder and does not have any meaning. Some text here to show the content of the note. This content is just a placeholder and does not have any meaning. Some text here to show the content of</p><p>This content is just a placeholder and does not have any meaning. Some text here to show the content of the note. This content is just a placeholder and does not have any meaning. Some text here to show the content of</p><p>This content is just a placeholder and does not have any meaning. Some text here to show the content of the note. This content is just a placeholder and does not have any meaning. Some text here to show the content of</p><p>This content is just a placeholder and does not have any meaning. Some text here to show the content of</p>",
    },
]; */

export const NoteList = ({ notesType, tag, search }: NoteListProps) => {
    let notes: Note[] = [];

    const getNotesHandler = async () => {
        try {
            const notes = await getNotes({
                notesType: notesType,
                tag: tag,
                search: search,
            });

            console.log(notes);
        } catch (error) {
            console.log(error);
        }
    };

    getNotesHandler();

    return (
        <div className="p-8 pr-4 border-r-2 border-gray-200">
            <CreateNote />
            <div className="mt-4">
                {notes.map((note, index) => (
                    <NoteComponent key={index} note={note} />
                ))}
            </div>
        </div>
    );
};
