'use client'

import Container from "../../components/container";
import {shortWallet} from "../../../utils/shortenWallet"
import Image from "next/image"
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import ColList from "@/app/components/colList";
import Eligibility from "@/app/components/eligibility";
import { useStateProvider } from "@/app/contexts/StateContext";
import { reducerCases } from "@/app/contexts/constants";
import { useEffect } from "react";

const Checker  = ({ params }) => {

    const wallet = params.wallet

   
    
    

    return (
        <div className="w-full h-full text-white text-sm ">
            <Container>
                <div className="flex flex-col flex-grow pt-3 pb-3">
                    <div className="w-full flex gap-1">
                        <Image src={"https://img.cryptorank.io/coins/polyhedra_network1676990904251.png"} alt="polavatar" width={48} height={48} />
                        <div className="flex flex-col justify-center items-start">
                            <span className="text-[12px] text-gray-100">
                                {shortWallet(wallet)}
                            </span>
                            <Link className="text-secondary text-[12px] text text-gray-300 flex items-center gap-1" target="_blank" href={"https://zkbridgescan.com/"}>
                                EXPLORER 
                                <span>
                                    <FaExternalLinkAlt className="text-gray-300"/>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center opacity-20">
                        <span className="w-full flex border border-t-1 text-gray-200 mt-2"></span>
                    </div>
                    <div className="w-full h-full flex sm:flex-row flex-col gap-1">
                        <div className="h-full flex-1 border mt-2 p-2 border-gray-300 border-opacity-20">
                            <div className="flex flex-col gap-2">
                                <ColList text="Total Transactions:" value={66} />
                                <ColList text="Last TX:" value={"14-02-2024 08:20:47"} />
                                <ColList text="First TX:" value={"14-02-2024 08:20:47"} />
                                <ColList text="Wallet Age:" value={"259 days"} />
                                <ColList text="Unique days:" value={38} />   
                               
                                        <ColList text="Unique Weeks:" value={5} />
                                        <ColList text="Tokens bridge:" value={13} />
                                        <ColList text="Unique months:" value={6} />
                                        <ColList text="NFTs bridge:" value={43} />
                                        <ColList text="Messages sent:" value={6} />        
                                <div className="w-full flex justify-between items-center p-1 gap-1 border border-gray-300 border-opacity-20">
                                    <div className="flex items-center justify-center gap-1">
                                        <Image src="https://img.cryptorank.io/coins/galxe1662992396276.png" alt="galxe" width={48} height={48} />
                                        <div className="flex flex-col justify-center items-start">
                                            <span className="text-[12px] text-gray-100">
                                                Total Galxe Points:
                                            </span>
                                            <Link className="text-secondary text-[12px] text text-gray-300 flex items-center gap-1" target="_blank" href={"https://galxe.com/polyhedra"}>
                                                GALXE 
                                                <span>
                                                    <FaExternalLinkAlt className="text-gray-300"/>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <span className="text-[12px] text-gray-300">
                                            525
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 border mt-2 p-2 border-gray-300 border-opacity-20">
                            <div className="flex flex-col gap-2">
                                <Eligibility is_eligible={true} value={25} text="Transaction value:" type={"transaction"}/>
                                <Eligibility is_eligible={false} value={2} text="Transaction over time:" type={"time"}/>
                                <Eligibility is_eligible={true} value={0} text="Completed Galxe Quests" type={"no_value"}/>
                                <Eligibility is_eligible={true} value={0} text="Pandra King Holder" type={"no_value"}/>
                            </div>
                        </div>                  
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default Checker;