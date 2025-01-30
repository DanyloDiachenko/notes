import { getCookie } from "@/helpers/getCookie";

export const getProfile = async () => {
    const token = await getCookie("token");

    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/profile/`, {
        method: "GET",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};
