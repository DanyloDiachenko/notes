import { Aside } from "@/components/Aside";
import { IoSettingsOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import Link from "next/link";

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
                <div className="grid grid-cols-[0.25fr_0.5fr_0.25fr]">
                    <div className="p-8">
                        <button className="flex items-center justify-center gap-2 p-2 py-3 w-full bg-blue-600 text-white rounded-lg hover:bg-[#7351f5]">
                            <FiPlus />
                            <span>Create New Note</span>
                        </button>
                        <div className="mt-4">
                            <div className="bg-slate-100 p-3 rounded-md">
                                <Link
                                    className="font-bold text-xl text-slate-800 hover:text-[#7351f5]"
                                    href="/note/1"
                                >
                                    React Perfomance Optmization
                                </Link>
                                <div className="flex gap-2 mt-2">
                                    <div className="bg-slate-300 p-1 rounded-sm text-sm font-medium">
                                        Dev
                                    </div>
                                    <div className="bg-slate-300 p-1 rounded-sm text-sm font-medium">
                                        React
                                    </div>
                                </div>
                                <div className="text-slate-600 mt-3 font-medium">
                                    29 Oct 2024
                                </div>
                            </div>
                            <div className="mt-2 border-b-2 border-gray-200 p-3">
                                <Link
                                    className="font-bold text-xl text-slate-800 hover:text-[#7351f5]"
                                    href="/note/1"
                                >
                                    React Perfomance Optmization
                                </Link>
                                <div className="flex gap-2 mt-2">
                                    <div className="bg-slate-300 p-1 rounded-sm text-sm font-medium">
                                        Dev
                                    </div>
                                    <div className="bg-slate-300 p-1 rounded-sm text-sm font-medium">
                                        React
                                    </div>
                                </div>
                                <div className="text-slate-600 mt-3 font-medium">
                                    29 Oct 2024
                                </div>
                            </div>
                            <div className="mt-2 border-b-2 border-gray-200 p-3">
                                <Link
                                    className="font-bold text-xl text-slate-800 hover:text-[#7351f5]"
                                    href="/note/1"
                                >
                                    React Perfomance Optmization
                                </Link>
                                <div className="flex gap-2 mt-2">
                                    <div className="bg-slate-300 p-1 rounded-sm text-sm font-medium">
                                        Dev
                                    </div>
                                    <div className="bg-slate-300 p-1 rounded-sm text-sm font-medium">
                                        React
                                    </div>
                                </div>
                                <div className="text-slate-600 mt-3 font-medium">
                                    29 Oct 2024
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </main>
        </>
    );
};

export default Home;
