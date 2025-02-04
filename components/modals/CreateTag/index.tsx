"use client";

import { createTag } from "@/api/tags.api";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { closeModal } from "@/store/slices/openedModal";
import { useAppDispatch } from "@/store/store";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

export const CreateTag = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const [tagTitle, setTagTitle] = useState("");
    const [tagKeyCode, setTagKeyCode] = useState("");

    const closeModalHandler = () => {
        dispatch(closeModal());
    };

    const onCreateTagSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (tagTitle === "" || tagKeyCode === "") {
            toast.error("Please fill all fields");
            return;
        }

        if (!/^[a-zA-Z0-9]+$/.test(tagKeyCode)) {
            toast.error("Tag key code should only contain letters and numbers");
            return;
        }

        try {
            const createTagResponse = await createTag({
                title: tagTitle,
                slug: tagKeyCode,
            });

            if ("message" in createTagResponse) {
                toast.error(createTagResponse.message);
                return;
            }

            if (createTagResponse.id) {
                toast.success("Tag created successfuly");

                closeModalHandler();
                router.refresh();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="relative">
            <div className="text-3xl font-bold mt-6 text-center">
                Create New Tag
            </div>
            <form action="#" className="mt-10 block">
                <label htmlFor="">
                    <div className="font-medium text-lg">Tag Title</div>
                    <Input
                        type="text"
                        className="mt-2"
                        placeholder="Tag title..."
                        value={tagTitle}
                        onChange={(e) => setTagTitle(e.target.value)}
                    />
                </label>
                <label htmlFor="" className="mt-4 block">
                    <div className="font-medium text-lg">Tag Key Code</div>
                    <Input
                        type="text"
                        className="mt-2"
                        placeholder="Tag key code..."
                        value={tagKeyCode}
                        onChange={(e) => setTagKeyCode(e.target.value)}
                    />
                </label>
                <div className="gap-2 mt-10 grid grid-cols-[150px_150px]">
                    <Button color="purple" onClick={onCreateTagSubmit}>
                        Submit
                    </Button>
                    <Button color="red" onClick={closeModalHandler}>
                        Discard
                    </Button>
                </div>
            </form>
        </div>
    );
};
