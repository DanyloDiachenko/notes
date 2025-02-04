"use client";

import { cn } from "@/helpers/cn";
import { MultiselectProps } from "./multiselect.props";
import { KeyboardEvent, MouseEvent, useEffect, useRef, useState } from "react";
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
    const [highlightedOptionIndex, setHighlightedOptionIndex] =
        useState<number>(-1);

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

    const onOptionKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
        switch (event.key) {
            case "Enter":
                if (
                    highlightedOptionIndex >= 0 &&
                    availableOptions[highlightedOptionIndex]
                ) {
                    onOptionClick(availableOptions[highlightedOptionIndex]);
                }
                break;
            case "Escape":
                setIsOptionsOpened(false);
                break;
            case "ArrowDown":
                if (highlightedOptionIndex < availableOptions.length - 1) {
                    setHighlightedOptionIndex(highlightedOptionIndex + 1);
                }
                break;
            case "ArrowUp":
                if (highlightedOptionIndex > 0) {
                    setHighlightedOptionIndex(highlightedOptionIndex - 1);
                }
                break;
            case "Backspace":
            case "Delete":
                if (!activeOptions.length && availableOptions.length) {
                    setIsOptionsOpened(false);
                }
                break;
            default:
                break;
        }
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
                aria-haspopup="listbox"
                aria-expanded={isOptionsOpened}
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        setIsOptionsOpened(true);
                    }
                }}
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
                                    aria-label={`Remove ${option.title}`}
                                    aria-selected={activeOptions.includes(
                                        option,
                                    )}
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
                    role="listbox"
                    aria-activedescendant={
                        highlightedOptionIndex >= 0
                            ? availableOptions[highlightedOptionIndex].value
                            : ""
                    }
                    onKeyDown={onOptionKeyDown}
                    tabIndex={-1}
                >
                    {availableOptions.length ? (
                        availableOptions.map((option, index) => (
                            <li
                                key={option.value}
                                onClick={() => onOptionClick(option)}
                                role="option"
                                className={cn(
                                    "cursor-pointer",
                                    highlightedOptionIndex === index &&
                                        "bg-blue-100",
                                )}
                                aria-selected={activeOptions.includes(option)}
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        onOptionClick(option);
                                    }
                                }}
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
