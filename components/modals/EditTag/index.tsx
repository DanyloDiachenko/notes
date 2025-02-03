"use client";

import { updateTag } from "@/api/tags.api";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { closeModal } from "@/store/slices/openedModal";
import { setTagToEdit } from "@/store/slices/tagToEdit";
import { TagToEditState } from "@/store/slices/tagToEdit/openedPopupState.interface";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export const EditTag = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const tagToEdit = useSelector(
        (state: RootState) => state.tagToEdit.tagToEdit,
    );

    const onEditTagFields = (tagToEdit: TagToEditState["tagToEdit"]) => {
        dispatch(setTagToEdit(tagToEdit));
    };

    const closeModalHandler = () => {
        dispatch(closeModal());
    };

    const onEditTagSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (tagToEdit.title === "" || tagToEdit.slug === "") {
            toast.error("Please fill all fields");
            return;
        }
        for (let i = 0; i < tagToEdit.slug.length; i++) {
            if (!/^[a-zA-Z0-9]$/.test(tagToEdit.slug[i])) {
                toast.error(
                    "Tag key code should only contain letters and numbers",
                );
                return;
            }
        }

        try {
            const editTagResponse = await updateTag({
                id: tagToEdit.id,
                title: tagToEdit.title,
                slug: tagToEdit.slug,
            });

            if (editTagResponse.message) {
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
                        value={tagToEdit.title}
                        onChange={(e) =>
                            onEditTagFields({
                                ...tagToEdit,
                                title: e.target.value,
                            })
                        }
                    />
                </label>
                <label htmlFor="" className="mt-4 block">
                    <div className="font-medium text-lg">Tag Key Code</div>
                    <Input
                        type="text"
                        className="mt-2"
                        placeholder="Tag key code..."
                        value={tagToEdit.slug}
                        onChange={(e) =>
                            onEditTagFields({
                                ...tagToEdit,
                                slug: e.target.value,
                            })
                        }
                    />
                </label>
                <div className="gap-2 mt-10 grid grid-cols-[150px_150px]">
                    <Button color="purple" onClick={onEditTagSubmit}>
                        Sumbit
                    </Button>
                    <Button color="red" onClick={closeModalHandler}>
                        Discard
                    </Button>
                </div>
            </form>
        </div>
    );
};
