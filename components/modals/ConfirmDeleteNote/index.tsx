import { Button } from "@/components/ui/Button";

export const ConfirmDeleteNote = () => {
    return (
        <div className="relative">
            <div className="text-3xl font-bold mt-6 text-center">
                Delete Note
            </div>
            <div className="text-lg mt-10">
                Are you sure want to delete note:
            </div>
            <div className="font-semibold text-xl">My existing note?</div>
            <div className="gap-2 mt-10 grid grid-cols-[150px_150px]">
                <Button color="purple">Sumbit</Button>
                <Button color="red">Discard</Button>
            </div>
        </div>
    );
};
