'use client'

import axios from "axios"
import { useRouter } from "next/navigation"
import { useCallback, useState } from "react"
import { FaSearch } from "react-icons/fa"
import { Oval } from "react-loader-spinner"
import { useStateProvider } from "../contexts/StateContext"
import { reducerCases } from "../contexts/constants"




const Input = ({ option }) => {



    const router = useRouter()
    const [text, setText] = useState("")
    const [isLoading, setIsLoading] = useState(false)



    const text_for_placeholder = "Search Addresses...\n0x123\n0x123"




    const handleCheckWallet = useCallback(() => {
        if (text) {
            if (option === "one_wallet" && text) {
                

                router.push(`/checker/${text}`)

                            
            
            
            
         
                
                
                // axios.get(`/api/get-data/${{text}}`).then((response) => {
                //     setIsLoading(true)
                //     if (response) {
                //         console.log(response.data)  
                        
                //         router.refresh();
                //     }
                // }).catch((error) => {
                //     console.log("error", error)
                // }).finally(
                //     () => {setIsLoading(false)}
                // )

                


            } else if (option === "many_wallets" && text) {
                router.push(`/checker/list`) 
            }
        }
    }, [text])

    return (
        <>
            {option === "one_wallet" && (
                <div className="flex items-center justify-center relative left-4">
                    <input
                        value={text}
                        onChange={(e) => { setText(e.target.value) }}
                        placeholder="Search Address"
                        className={`p-3 text-sm rounded-md bg-transparent border border-gray-400 border-solid border-opacity-40 outline-none shadow drop-shadow-2xl text-gray-200                         w-11/12 sm:w-8/12 lg:w-5/12 md:w-6/12
                        `}
                    />
                    <button
                        onClick={handleCheckWallet}
                        disabled={isLoading}
                        className={`
                    relative right-10 text-center p-2 bg-slate-800 rounded-md border border-slate-700
                    hover:border-[#0cffd3] transition duration-300
                    ${isLoading ? "cursor-not-allowed bg-slate-500" : ""}

                    `}>
                        {
                            isLoading ? <Oval color="#0cffd3" height={30} width={30}/> : <FaSearch className="text-white w-fulltext-gray-200 hover:text-[#0cffd3] transition duration-300" />

                        }
                    </button>
                </div>
            )}
            {option === "many_wallets" && (
                <div className="flex flex-col justify-center items-center">
                    <textarea
                        className="
                        flex=grow
                        border-opacity-40
                        outline-none
                        text-sm 
                        w-11/12
                        bg-transparent custom-scroll sm:w-8/12 lg:w-5/12 md:w-6/12
                        h-48 border-gray-300 border rounded-lg p-3 resize-none text-gray-200 overflow-visible"
                        placeholder={text_for_placeholder}
                        value={text}
                        onChange={(e) => { setText(e.target.value) }}
                    ></textarea>
                    <button
                        onClick={handleCheckWallet}
                        className="
                    
                   flex items-center justify-center mt-4
                   text-center p-2 bg-slate-800 rounded-md border border-slate-700
                    hover:border-[#0cffd3] transition duration-300 w-11/12 sm:w-8/12 lg:w-5/12 md:w-6/12

                    ">
                        <FaSearch className="text-gray-200 hover:text-[#0cffd3] transition duration-300 w-full" />
                    </button>
                </div>
            )}
        </>
    )
}


export default Input;