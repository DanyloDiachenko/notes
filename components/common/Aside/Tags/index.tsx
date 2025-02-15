import { TagsProps } from "./Tags.props";
import { AddTag } from "./AddTag";
import { Tag } from "./Tag";

export const Tags = ({ tags }: TagsProps) => {
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
