import { NoteList } from "@/components/pageComponents/notesType/NoteList";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

const NoteTypeLayout = async ({
    children,
    params,
}: {
    children: ReactNode;
    params: Promise<{ type: string }>;
}) => {
    const paramsData = await params;

    switch (paramsData.type) {
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

    return (
        <>
            <div className="grid grid-cols-[0.25fr_0.5fr_0.25fr]">
                <NoteList notesType={paramsData.type} />
                {children}
            </div>
        </>
    );
};

export default NoteTypeLayout;
