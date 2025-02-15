import { cn } from "@/helpers/cn";
import { InputProps } from "./Input.props";

export const Input = ({ className, ...rest }: InputProps) => {
    return (
        <input
            className={cn(
                "w-full p-2 sm:p-3 text-sm sm:text-base font-medium bg-gray-100 rounded-md",
                className,
            )}
            {...rest}
        />
    );
};
