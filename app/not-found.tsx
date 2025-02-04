import Link from "next/link";

const NotFound = () => {
    return (
        <div className="pl-4 pt-4">
            <h2 className="text-xl font-bold">Not Found</h2>
            <p className="mt-1">Could not find requested resource</p>
            <Link href="/" className="mt-3 block">Return to Home</Link>
        </div>
    );
};

export default NotFound;
