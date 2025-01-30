export const setCookie = (name: string, value: any) => {
    if (typeof document !== "undefined") {
        document.cookie = `${name}=${value}; path=/`;
    }
};
