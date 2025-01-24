import { Aside } from "@/components/Aside";
import { IoSettingsOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

const Home = () => {
    return (
        <>
            <Aside />
            <main className="w-full">
                <header className="p-8 flex justify-between items-center border-b-2 border-gray-200">
                    <h1 className="font-bold text-4xl">All Notes</h1>
                    <div className="flex items-center gap-4">
                        <div className="relative w-[300px]">
                            <input
                                type="text"
                                className="w-full border-2 border-gray-200 rounded-md p-2 pl-8"
                                placeholder="Search in..."
                            />
                            <FaSearch className="absolute left-2 top-3 size-5 opacity-20" />
                        </div>
                        <button>
                            <IoSettingsOutline className="size-6 text-gray-500" />
                        </button>
                    </div>
                </header>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </main>
        </>
    );
};

export default Home;
