"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { cn } from "@/helpers/cn";
import { useState } from "react";

export const Authorization = () => {
    const [tab, setTab] = useState<"login" | "register">("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onAuthSubmit = (e: React.FormEvent) => {
        e.preventDefault();
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
                    <Button color="red">Discard</Button>
                </div>
            </form>
        </div>
    );
};
