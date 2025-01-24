import { Aside } from "@/components/Aside";
import { Header } from "@/components/Header";
import { Notes } from "@/components/Notes";
import { NoteDetails } from "@/components/NoteDetails";
import { NoteActions } from "@/components/NoteActions";

const Home = () => {
    return (
        <>
            <Aside />
            <main className="w-full">
                <Header />
                <div className="grid grid-cols-[0.25fr_0.5fr_0.25fr]">
                    <Notes />
                    <NoteDetails />
                    <NoteActions />
                </div>
            </main>
        </>
    );
};

export default Home;
