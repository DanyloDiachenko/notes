import { PiNotepad } from "react-icons/pi";

export const HomePageComponent = () => {
    return (
        <div className="flex gap-2 items-center p-8">
            <div className="text-xl font-medium">
                Hello, this web-application is developed to create notes
            </div>
            <PiNotepad className="size-8" />
        </div>
    );
};
