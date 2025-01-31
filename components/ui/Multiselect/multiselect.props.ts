import { SelectOption } from "@/types/selectOption.interface";

export interface MultiselectProps {
    placeholder: string;
    options: SelectOption[];
    activeOptions: SelectOption[];
    setActiveOptions: (options: SelectOption[]) => void;
    className: string;
}
