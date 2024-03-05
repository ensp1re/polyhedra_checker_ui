import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";



const WalletList = ({
    wallet, total, time, walletAge, LastTx, galxePoints, pandraHolder
}) => {


    return (
        <div className="min-w-[950px] flex-grow-1 flex-shrink-0 flex-basis-0 flex flex-row justify-between border border-t-0 border-r-0 border-l-0  border-b-gray-300 border-opacity-25 text-sm text-gray-300 p-2 hover:bg-[#010f08] cursor-pointer transition duration-500">
            <div className="flex-grow-1 flex-shrink-0 flex-basis-0 min-w-[120px] flex justify-center">
                {wallet}
            </div>
            <div className="flex-grow-1 flex-shrink-0 flex-basis-0 min-w-[50px] flex justify-center pr-4 mr-6">
                {total}
            </div>
            <div className="flex-grow-1 flex-shrink-0 flex-basis-0 min-w-[50px] flex justify-center ">
                {time}
            </div>
            <div className="flex-grow-1 flex-shrink-0 flex-basis-0 min-w-[50px] flex justify-center ml-8">
                {walletAge}
            </div>
            <div className="flex-grow-1 flex-shrink-0 flex-basis-0 min-w-[50px] flex justify-center">
                {LastTx}
            </div>
            <div className="flex-grow-1 flex-shrink-0 flex-basis-0 min-w-[50px] flex justify-center mr-3">
                {galxePoints}
            </div>
            <div className="flex-grow-1 flex-shrink-0 flex-basis-0 min-w-[110px] flex justify-center mr-8">                  
               <div className={` border border-opacity-50 ${pandraHolder ? "border-emerald-300" : "border-red-300"}  rounded-full p-2 flex justify-center items-center`}>
                     {pandraHolder ? <FaCheck className="text-emerald-300"/> : <IoMdClose className="text-red-300"/>}
                 </div>   
            </div>
        </div>
    )
}


export default WalletList;