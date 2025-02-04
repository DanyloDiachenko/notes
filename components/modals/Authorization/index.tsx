"use client";

import { login, register } from "@/api/auth.api";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { cn } from "@/helpers/cn";
import { setCookie } from "@/helpers/setCookie";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { closeModal } from "@/store/slices/openedModal";
import { useAppDispatch } from "@/store/store";

export const Authorization = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const [tab, setTab] = useState<"login" | "register">("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const closeModalHandler = () => {
        dispatch(closeModal());
    };

    const authenticateUser = async (action: "login" | "register") => {
        try {
            const response =
                action === "login"
                    ? await login({ email, password })
                    : await register({ email, password });

            if ("message" in response) {
                toast.error(response.message);
                return;
            }

            if ("token" in response) {
                toast.success(
                    action === "login"
                        ? "Successfully logged in"
                        : "Successfully registered and logged in",
                );

                setCookie("token", response.token);
                closeModalHandler();
                router.refresh();
            }
        } catch (error) {
            console.error("Authentication error:", error);
        }
    };

    const onAuthSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Please fill all fields");
            return;
        }

        authenticateUser(tab);
    };

    return (
        <div className="relative">
            <div className="text-3xl font-bold mt-6 text-center">
                Authorization
            </div>
            <div className="grid grid-cols-2 mt-3 text-xl font-semibold text-center gap-8">
                <button
                    className={cn(
                        "border-b-4 pb-2 cursor-pointer border-b-white duration-300",
                        tab === "login"
                            ? "text-gray-800 border-gray-300"
                            : "hover:border-gray-100",
                    )}
                    onClick={() => setTab("login")}
                    role="tab"
                    aria-selected={tab === "login"}
                >
                    Login
                </button>
                <button
                    className={cn(
                        "border-b-4 pb-2 cursor-pointer border-b-white duration-300",
                        tab === "register"
                            ? "text-gray-800 border-gray-300"
                            : "hover:border-gray-100",
                    )}
                    onClick={() => setTab("register")}
                    role="tab"
                    aria-selected={tab === "register"}
                >
                    Register
                </button>
            </div>
            <form action="#" className="block mt-10">
                <label htmlFor="email" className="block font-medium text-lg">
                    Email
                </label>
                <Input
                    id="email"
                    name="email"
                    className="mt-2"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label
                    htmlFor="password"
                    className="block font-medium text-lg mt-4"
                >
                    Email
                </label>
                <Input
                    id="password"
                    name="password"
                    className="mt-2"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="gap-2 mt-10 grid grid-cols-[150px_150px]">
                    <Button color="purple" onClick={onAuthSubmit}>
                        Submit
                    </Button>
                    <Button color="red" onClick={closeModalHandler}>
                        Discard
                    </Button>
                </div>
            </form>
        </div>
    );
};
