"use client";

import { closeModal } from "@/store/slices/openedModal";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/Button";

export const Modals = () => {
    const dispatch = useDispatch();
    const openedModal = useSelector(
        (state: RootState) => state.openedModal.openedModal,
    );

    const closeModalHandler = () => {
        dispatch(closeModal());
    };

    return (
        <>
            <div className="absolute z-10 top-0 right-0 left-0 bottom-0 bg-slate-900 opacity-30 w-full h-full"></div>
            <div className="max-w-[700px] w-full absolute z-20 top-20 bg-white right-[50%] left-[50%] translate-x-[-50%] p-6">
                <button className="absolute top-2 right-3">x</button>
                <div className="relative">
                    <div className="text-3xl font-bold mt-6 text-center">
                        Create New Note
                    </div>
                    <form action="#" className="mt-10 block">
                        <label htmlFor="">
                            <div className="font-medium text-lg">
                                Note Title
                            </div>
                            <input
                                type="text"
                                className="mt-2 w-full p-3 text-base font-medium bg-gray-100 rounded-md"
                                placeholder="Note title..."
                            />
                        </label>
                        <label htmlFor="" className="mt-4 block">
                            <div className="font-medium text-lg">Note Tags</div>
                            <input
                                type="text"
                                className="mt-2 w-full p-3 text-base font-medium bg-gray-100 rounded-md"
                                placeholder="Select tags..."
                            />
                        </label>
                        <label htmlFor="" className="mt-4 block">
                            <div className="font-medium text-lg">
                                Note Details
                            </div>
                            <textarea
                                className="mt-2 w-full p-3 text-base font-medium bg-gray-100 rounded-md min-h-40"
                                placeholder="Note details..."
                            />
                        </label>
                        <div className="flex gap-2 mt-10">
                            <Button color="purple" className="w-auto px-12">
                                Sumbit
                            </Button>
                            <Button color="red" className="w-auto px-12">
                                Discard
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
        /* <div className="absolute z-50 w-full h-full top-0 left-0 right-0 bottom-0">
            <div className="bg-slate-900 opacity-30 w-full h-full"></div>
            <div className="max-w-96 w-full mt-10 bg-white">
                <div>hello world</div>
            </div>
        </div> */
    );
};
