import { CreateNote } from "./Create";
import { Note } from "@/interfaces/common/note.interface";
import { Note as NoteComponent } from "./Note";

const notes: Note[] = [
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
];

export const NoteList = () => {
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
