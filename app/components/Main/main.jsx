'use client'

import { useEffect, useState } from "react";
import Input from "../input"
import Head from "next/head"

const Main = () => {
    const [loading, setLoading] = useState(true);


    const [input, setInput] = useState("one_wallet")


    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="text-white text-4xl mt-8">
                    Polyhedra Checker
                </div>
                <div className="flex flex-row justify-center items-center gap-8 mt-6">
                    <div className="flex items-center">
                        <input
                            type="radio"
                            checked={input === "one_wallet"}
                            value="one_wallet"
                            name="radioGroup"
                            onChange={() => { setInput("one_wallet") }}
                            className={`w-4 h-4 text-emerald-500 bg-emerald-500 border-0 focus:ring-0 `}
                        />
                        <label className={`ml-2 text-sm font-medium ${input === "one_wallet" ? "text-emerald-400" : "text-gray-200"} text-gray-200`}>Check one wallet</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            disabled={loading}

                            type="radio"
                            value="many_wallets"
                            onChange={() => { setInput("many_wallets") }}
                            name="radioGroup"
                            className="w-4 h-4 text-emerald-500 bg-emerald-500 border-emerald-300"
                        />
                        <label className={`ml-2 text-sm font-medium ${input === "many_wallets" ? "text-emerald-400" : "text-gray-200"}`}>Check list wallets</label>
                    </div>
                </div>
                <div className="w-full mt-8">
                    <Input option={input} />
                </div>
            </div>
        </>
    )
}



export default Main;