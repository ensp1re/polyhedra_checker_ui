import Container from "../container";
import Image from "next/image"
import Link from "next/link"





const NavBar = () => {


    return (
        <footer className="bg-transparent border-b border-gray-200 border-opacity-30 shadow-sm text-slate-200 pt-3 pb-3">
            <Container>
                <div className="flex items-center justify-between gap-3 md:gap-0">
                    <Link href="/" className="flex flex-row items-center">
                        <Image loading="lazy" width={45} height={45} src={"https://img.cryptorank.io/coins/polyhedra_network1676990904251.png"} />
                        <div className="flex flex-col m-0">
                            PolyCheck                            <br />
                            <span className="text-secondary text-xs text-emerald-500">
                                Airdrop Checker
                            </span>
                        </div>
                    </Link>
                    <Link href="/" >
                        <div className="flex items-center justify-center w-40 sm:w-60 border p-2 border-[#0cffd3] text-[#0cffd3] rounded-lg cursor-pointer 
                        hover:bg-[#0cffd3] hover:text-black transition duration-500 
                        ">
                            <span>
                                Check Wallet
                            </span>
                        </div>
                    </Link>
                </div>
            </Container>
        </footer>
    )
}

export default NavBar;