import { cn } from "@/helpers/cn";
import { ButtonProps } from "./Button.props";

export const Button = ({
    color,
    className,
    children,
    ...rest
}: ButtonProps) => {
    const colorStyles = {
        purple: "bg-[#7351f5] text-white hover:bg-[#4020c3]",
        gray: "border-2 border-gray-200 text-gray-600 hover:bg-gray-200 hover:text-gray-800",
        red: "bg-red-600 text-white hover:bg-red-500",
    };

    return (
        <button
            className={cn(
                "p-3 px-4 flex items-center justify-center rounded-lg w-full font-semibold",
                color && colorStyles[color],
                className,
            )}
            {...rest}
        >
            {children}
        </button>
    );
};
