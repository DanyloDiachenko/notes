import { useEffect } from "react";

export function onOutsideClick(
    ref: React.RefObject<HTMLElement>,
    callback: () => void,
) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [ref, callback]);
}
