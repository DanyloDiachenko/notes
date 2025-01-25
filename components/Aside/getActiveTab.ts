export const getActiveTab = (pathname: string) => {
    if (pathname.includes("all")) {
        return "all";
    } else if (pathname.includes("archived")) {
        return "archived";
    } else {
        return "";
    }
};
