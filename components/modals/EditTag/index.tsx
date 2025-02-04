"use client";

import { updateTag } from "@/api/tags.api";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { closeModal } from "@/store/slices/openedModal";
import { selectTag, setTag } from "@/store/slices/tag";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { toast } from "react-toastify";

export const EditTag = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const tag = useAppSelector(selectTag);

    const closeModalHandler = () => {
        dispatch(closeModal());
    };

    if (!tag) {
        return null;
    }

    const onEditTagSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (tag.title === "" || tag.slug === "") {
            toast.error("Please fill all fields");
            return;
        }

        if (!/^[a-zA-Z0-9]+$/.test(tag.slug)) {
            toast.error("Tag key code should only contain letters and numbers");
            return;
        }

        try {
            const editTagResponse = await updateTag(tag.id, {
                title: tag.title,
                slug: tag.slug,
            });

            if ("message" in editTagResponse) {
                toast.error(editTagResponse.message);
                return;
            }
            if (editTagResponse.id) {
                toast.success("Tag updated successfuly");

                closeModalHandler();
                router.refresh();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="relative">
            <div className="text-3xl font-bold mt-6 text-center">Edit Tag</div>
            <form action="#" className="mt-10 block">
                <label htmlFor="">
                    <div className="font-medium text-lg">Tag Title</div>
                    <Input
                        type="text"
                        className="mt-2"
                        placeholder="Tag title..."
                        value={tag.title}
                        onChange={(e) =>
                            dispatch(setTag({ ...tag, title: e.target.value }))
                        }
                    />
                </label>
                <label htmlFor="" className="mt-4 block">
                    <div className="font-medium text-lg">Tag Key Code</div>
                    <Input
                        type="text"
                        className="mt-2"
                        placeholder="Tag key code..."
                        value={tag.slug}
                        onChange={(e) =>
                            dispatch(setTag({ ...tag, slug: e.target.value }))
                        }
                    />
                </label>
                <div className="gap-2 mt-10 grid grid-cols-[150px_150px]">
                    <Button color="purple" onClick={onEditTagSubmit}>
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
