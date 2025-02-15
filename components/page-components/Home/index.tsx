import { PiNotepad } from "react-icons/pi";

export const HomePageComponent = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-2 items-center xl:p-8 p-4">
            <div className="text-xl font-medium">
                Hello, this web-application is developed to create notes
            </div>
            <PiNotepad className="size-20 xl:size-8" />
        </div>
    );
};
