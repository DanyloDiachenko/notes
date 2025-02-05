"use client";

import { createTag, updateTag } from "@/api/tags.api";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { closeModal } from "@/store/slices/openedModal";
import { selectTag } from "@/store/slices/tag";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { TagProps } from "./Tag.props";
import { validateKeyCode } from "./validateKeyCode";

export const Tag = ({ mode }: TagProps) => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const tag = useAppSelector(selectTag);

    const [tagTitle, setTagTitle] = useState(
        mode === "edit" ? tag?.title || "" : "",
    );
    const [tagKeyCode, setTagKeyCode] = useState(
        mode === "edit" ? tag?.slug || "" : "",
    );

    const closeModalHandler = () => {
        dispatch(closeModal());
    };

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (tagTitle.trim() === "" || tagKeyCode.trim() === "") {
            toast.error("Please fill all fields");
            return;
        }

        if (validateKeyCode(tagKeyCode)) {
            toast.error("Tag key code should only contain letters and numbers");
            return;
        }

        try {
            let response;
            if (mode === "edit" && tag) {
                response = await updateTag(tag.id, {
                    title: tagTitle,
                    slug: tagKeyCode,
                });
            } else {
                response = await createTag({
                    title: tagTitle,
                    slug: tagKeyCode,
                });
            }

            if ("message" in response) {
                toast.error(response.message);
                return;
            }

            toast.success(
                mode === "edit"
                    ? "Tag updated successfully"
                    : "Tag created successfully",
            );
            closeModalHandler();
            router.refresh();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="relative">
            <div className="text-3xl font-bold mt-6 text-center">
                {mode === "edit" ? "Edit Tag" : "Create New Tag"}
            </div>
            <form className="mt-10 block " onSubmit={onSubmit}>
                <label className="font-medium text-lg" htmlFor="tagTitle">
                    Tag Title
                </label>
                <Input
                    id="tagTitle"
                    name="tag title"
                    type="text"
                    className="mt-2"
                    placeholder="Tag title..."
                    value={tagTitle}
                    onChange={(e) => setTagTitle(e.target.value)}
                    required={mode === "create"}
                />
                <label
                    className="mt-4 block font-medium text-lg"
                    htmlFor="tagKeyCode"
                >
                    Tag Key Code
                </label>
                <Input
                    id="tagKeyCode"
                    name="tag key code"
                    type="text"
                    className="mt-2"
                    placeholder="Tag key code..."
                    value={tagKeyCode}
                    onChange={(e) => setTagKeyCode(e.target.value)}
                    required={mode === "create"}
                />
                <div className="gap-2 mt-10 grid grid-cols-[150px_150px]">
                    <Button color="purple" type="submit">
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
