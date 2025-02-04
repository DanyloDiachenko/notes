import { TagsProps } from "./tags.props";
import { AddTag } from "./AddTag";
import { Tag } from "./Tag";
import { Tag as ITag } from "@/types/tag.interface";
import { getTags } from "@/api/tags.api";

export const Tags = async ({ isAuthorized }: TagsProps) => {
    let tags: ITag[] = [];

    if (isAuthorized) {
        try {
            tags = (await getTags()) as ITag[];
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="px-4 mt-2 text-gray-500">
            <div className="font-semibold">Tags</div>
            {tags.length ? (
                tags.map((tag) => <Tag key={tag.id} tag={tag} />)
            ) : (
                <div className="mt-4 font-medium">Nothing here...</div>
            )}
            <AddTag />
        </div>
    );
};
