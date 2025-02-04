"use client";

import { cn } from "@/helpers/cn";
import { MultiselectProps } from "./multiselect.props";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { onOutsideClick } from "@/helpers/onOutsideClick";
import { IoMdClose } from "react-icons/io";
import { SelectOption } from "@/types/selectOption.interface";

export const Multiselect = ({
    placeholder,
    activeOptions,
    options,
    setActiveOptions,
    className,
    id,
}: MultiselectProps) => {
    const optionsRef = useRef<HTMLUListElement>(null);

    const [isOptionsOpened, setIsOptionsOpened] = useState(false);
    const [availableOptions, setAvailableOptions] = useState<SelectOption[]>(
        [],
    );

    onOutsideClick(optionsRef, () => {
        setIsOptionsOpened(false);
    });

    const onOptionClick = (option: SelectOption) => {
        setActiveOptions([...activeOptions, option]);
    };

    const onRemoveOptionClick = (option: SelectOption, e: MouseEvent) => {
        e.preventDefault();

        setActiveOptions(
            activeOptions.filter(
                (activeOption) => activeOption.value !== option.value,
            ),
        );
    };

    useEffect(() => {
        setAvailableOptions(
            options.filter(
                (option) =>
                    !activeOptions.some(
                        (activeOption) => activeOption.value === option.value,
                    ),
            ),
        );
    }, [activeOptions, options]);

    return (
        <div
            className={cn("relative font-medium text-base", className)}
            id={id}
        >
            <div
                className="flex items-center p-1 px-3 bg-gray-100 rounded-md min-h-12"
                onClick={() => setIsOptionsOpened(true)}
            >
                {activeOptions.length ? (
                    <ul className="flex gap-2">
                        {activeOptions.map((option, index) => (
                            <li
                                className="flex items-center p-1 px-2 gap-3 text-gray-800 bg-gray-300 rounded-md"
                                key={index}
                            >
                                <span>{option.title}</span>
                                <button
                                    className="p-0 rounded-full leading-none"
                                    onClick={(e) =>
                                        onRemoveOptionClick(option, e)
                                    }
                                >
                                    <IoMdClose />
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="text-gray-400">{placeholder}</div>
                )}
            </div>
            {isOptionsOpened && (
                <ul
                    className="absolute flex gap-1 top-[52px] right-0 left-0 w-full bg-gray-50 p-2 text-gray-600 z-10"
                    ref={optionsRef}
                >
                    {availableOptions.length ? (
                        availableOptions.map((option, index) => (
                            <li
                                key={option.value}
                                onClick={() => onOptionClick(option)}
                                className="cursor-pointer"
                            >
                                {option.title}
                                {index !== availableOptions.length - 1 && ","}
                            </li>
                        ))
                    ) : (
                        <li className="text-center w-full text-sm text-gray-400">
                            No options available
                        </li>
                    )}
                </ul>
            )}
        </div>
    );
};
