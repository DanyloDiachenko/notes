import { Notes } from "@/components/Notes";

const NoteTypeLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <div className="grid grid-cols-[0.25fr_0.5fr_0.25fr]">
                <Notes />
                {children}
            </div>
        </>
    );
};

export default NoteTypeLayout;
