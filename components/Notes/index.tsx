import Link from "next/link";
import { CreateNote } from "./CreateNote";
import { Note } from "@/interfaces/note.interface";
import { Note as NoteComponent } from "./Note";

const notes: Note[] = [
    {
        id: "1",
        title: "React Perfomance Optmization",
        tags: [
            {
                title: "React",
                slug: "Dev",
            },
            {
                title: "React",
                slug: "Dev",
            },
        ],
        createdAt: "29 Oct 2024",
    },
    {
        id: "2",
        title: "React Perfomance Optmization",
        tags: [
            {
                title: "React",
                slug: "Dev",
            },
            {
                title: "React",
                slug: "Dev",
            },
            {
                title: "React",
                slug: "Dev",
            },
            {
                title: "React",
                slug: "Dev",
            },
        ],
        createdAt: "29 Oct 2024",
    },
    {
        id: "3",
        title: "React Perfomance Optmization",
        tags: [
            {
                title: "React",
                slug: "Dev",
            },
            {
                title: "React",
                slug: "Dev",
            },
        ],
        createdAt: "29 Oct 2024",
    },
    {
        id: "4",
        title: "React Perfomance Optmization",
        tags: [
            {
                title: "React",
                slug: "Dev",
            },
            {
                title: "React",
                slug: "Dev",
            },
            {
                title: "React",
                slug: "Dev",
            },
        ],
        createdAt: "29 Oct 2024",
    },
    {
        id: "5",
        title: "React Perfomance Optmization",
        tags: [
            {
                title: "React",
                slug: "Dev",
            },
            {
                title: "React",
                slug: "Dev",
            },
        ],
        createdAt: "29 Oct 2024",
    },
];

export const Notes = () => {
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
