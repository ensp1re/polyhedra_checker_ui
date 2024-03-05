import Container from "../container";
import FooterList from "./FooterList"
import Link from "next/link"
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai"


const Footer = () => {

    return (
        <footer className="text-slate-100 text-sm w-full flex bg-transparent border-t border-gray-50 border-solid border-opacity-30  shadow-lg max-w-[1920px] xl:px-20">
                <div className="w-full flex flex-row  pt-5 pb-5 mr-4 ml-4 justify-between">
                    <div className="w-full mr-6 sm:mr-0">
                        <p>
                            &copy; {new Date().getFullYear()}  POLYCHECK
                            <span className="text-secondary text-slate-300 text-xs">
                                <br />
                                Airdrop Checker Simulation
                            </span>
                        </p>
                    </div>
                    <div className="w-full flex flex-col sm:flex-row gap-3 justify-end">
                        <FooterList>
                            <h3 className="text-base font-bold mb-2">Useful Links</h3>
                            <Link target="_blank" className="text-secondary text-gray-200 hover:text-gray-50 transition" href="https://zkbridge.com">ZkBridge</Link>
                            <Link target="_blank" className="text-secondary text-gray-200 hover:text-gray-50 transition" href="https://polyhedra.network/">Polyhedra</Link>
                            <Link target="_blank" className="text-secondary text-gray-200 hover:text-gray-50 transition" href="https://element.market/collections/legendary-pandra-king">Buy Pandra King</Link>
                        </FooterList>
                        <FooterList>
                            <div className="flex gap-2">
                                <Link target="_blank" className="text-secondary text-gray-200 hover:text-gray-50 transition" href="https://x.com/EnspireNFT">
                                    <AiFillTwitterCircle size={24} />
                                </Link>
                                <Link target="_blank" className="text-secondary text-gray-200 hover:text-gray-50 transition" href="https://github.com/ensp1re">
                                    <AiFillGithub size={24} />
                                </Link>
                            </div>
                        </FooterList>
                    </div>
                </div>
        </footer>
    )
}

export default Footer;