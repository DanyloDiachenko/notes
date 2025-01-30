"use client";

import { login, register } from "@/api/auth";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { cn } from "@/helpers/cn";
import { setCookie } from "@/helpers/setCookie";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { closeModal } from "@/store/slices/openedModal";

export const Authorization = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [tab, setTab] = useState<"login" | "register">("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const closeModalHandler = () => {
        dispatch(closeModal());
    };

    const onAuthSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Please fill all fields");
            return;
        }

        if (tab === "login") {
            try {
                const loginData = await login({ email, password });

                if (loginData.token) {
                    toast.success("Successfully logged in");
                    setCookie("token", loginData.token);

                    const timeoutId = setTimeout(() => {
                        closeModalHandler();

                        clearTimeout(timeoutId);
                    }, 4000);

                    router.refresh();
                }

                if (loginData.message) {
                    toast.error(loginData.message);
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                const registerData = await register({ email, password });
                console.log(registerData);

                if (registerData.token) {
                    toast.success("Successfully registered and logged in");
                    setCookie("token", registerData.token);

                    const timeoutId = setTimeout(() => {
                        closeModalHandler();

                        clearTimeout(timeoutId);
                    }, 4000);

                    router.refresh();
                }

                if (registerData.message) {
                    toast.error(registerData.message);
                }
            } catch (error) {
                console.log(error);
            }
        }
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
                >
                    Register
                </button>
            </div>
            <form action="#" className="mt-10 block">
                <label htmlFor="">
                    <div className="font-medium text-lg">Email</div>
                    <Input
                        className="mt-2"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label htmlFor="" className="mt-4 block">
                    <div className="font-medium text-lg">Password</div>
                    <Input
                        className="mt-2"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <div className="gap-2 mt-10 grid grid-cols-[150px_150px]">
                    <Button color="purple" onClick={onAuthSubmit}>
                        Sumbit
                    </Button>
                    <Button color="red" onClick={closeModalHandler}>
                        Discard
                    </Button>
                </div>
            </form>
        </div>
    );
};
