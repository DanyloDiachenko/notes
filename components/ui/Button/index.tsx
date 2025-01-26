import { ButtonProps } from "./button.props";

export const Button = ({
    color,
    className,
    children,
    ...rest
}: ButtonProps) => {
    switch (color) {
        case "purple": {
            return (
                <button
                    className={`flex items-center justify-center p-2 px-4 w-full bg-[#7351f5] text-white rounded-lg hover:bg-[#4020c3] ${
                        className ? className : ""
                    }`}
                    {...rest}
                >
                    {children}
                </button>
            );
        }
        case "gray": {
            return (
                <button
                    className={`p-2 px-4 flex items-center rounded-lg border-2
                        border-gray-200 w-full font-medium text-gray-600 hover:bg-gray-200 hover:text-gray-800 ${
                            className ? className : ""
                        }`}
                    {...rest}
                >
                    {children}
                </button>
            );
        }
        case "red": {
            return (
                <button
                    className={`p-2 px-4 flex items-center rounded-lg w-full font-medium
                        bg-red-600 hover:bg-red-400 text-white ${
                            className ? className : ""
                        }`}
                    {...rest}
                >
                    {children}
                </button>
            );
        }
        default: {
            return (
                <button
                    className={`p-2 px-4 flex items-center w-full font-medium ${
                        className ? className : ""
                    }`}
                    {...rest}
                >
                    {children}
                </button>
            );
        }
    }
};
