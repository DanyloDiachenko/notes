import { cn } from "@/helpers/cn";
import { TextareaProps } from "./Textarea.props";

export const Textarea = ({ className, ...rest }: TextareaProps) => {
    return (
        <textarea
            className={cn(
                "w-full p-2 sm:p-3 text-sm sm:text-base font-medium bg-gray-100 rounded-md min-h-20 sm:min-h-40",
                className,
            )}
            {...rest}
        />
    );
};
