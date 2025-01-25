import Link from "next/link";
import { CreateNote } from "./CreateNote";

export const Notes = () => {
    return (
        <div className="p-8 pr-4 border-r-2 border-gray-200">
            <CreateNote />
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
    );
};
