import { Button } from "@/components/ui/Button";

export const CreateNote = () => {
    return (
        <div className="relative">
            <div className="text-3xl font-bold mt-6 text-center">
                Create New Note
            </div>
            <form action="#" className="mt-10 block">
                <label htmlFor="">
                    <div className="font-medium text-lg">Note Title</div>
                    <input
                        type="text"
                        className="mt-2 w-full p-3 text-base font-medium bg-gray-100 rounded-md"
                        placeholder="Note title..."
                    />
                </label>
                <label htmlFor="" className="mt-4 block">
                    <div className="font-medium text-lg">Note Tags</div>
                    <input
                        type="text"
                        className="mt-2 w-full p-3 text-base font-medium bg-gray-100 rounded-md"
                        placeholder="Select tags..."
                    />
                </label>
                <label htmlFor="" className="mt-4 block">
                    <div className="font-medium text-lg">Note Details</div>
                    <textarea
                        className="mt-2 w-full p-3 text-base font-medium bg-gray-100 rounded-md min-h-40"
                        placeholder="Note details..."
                    />
                </label>
                <div className="flex gap-2 mt-10">
                    <Button color="purple" className="w-auto px-12">
                        Sumbit
                    </Button>
                    <Button color="red" className="w-auto px-12">
                        Discard
                    </Button>
                </div>
            </form>
        </div>
    );
};
