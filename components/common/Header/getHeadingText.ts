export const getHeadingText = (pathname: string) => {
    if (pathname.includes("all")) {
        return "All Notes";
    } else if (pathname.includes("archived")) {
        return "Archived Notes";
    } else {
        return "Notes App";
    }
};
