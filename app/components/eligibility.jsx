import { FaCheck, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";



const Eligibility = ({
    is_eligible, text, value, type
}) => {

    const txAmountEligible = [10, 25, 50, 100]
    const txOverTime = [3, 6, 9]

    return (
        <div className={`w-full flex rounded-lg border border-gray-300 border-opacity-25
        ${is_eligible ? "hover:border-emerald-300" : "hover:border-red-300"}   transition duration-300 p-1 bg-[#121212] gap-3
        `}>
            <div className={`w-10 border border-opacity-50 ${is_eligible ? "border-emerald-300" : "border-red-300"} ${type === "no_value" ? "p-3" : ""} rounded-full p-2 flex justify-center items-center`}>
                {is_eligible ? <FaCheck className="text-emerald-300"/> : <IoMdClose className="text-red-300"/>}
            </div>
            <div className={`text-sm text-gray-200 flex flex-col items-start ${type === "no_value" ? "items-center justify-center" : ""}`}>
                <span>
                    {text}
                </span>
                <div className="text-[12px] text-gray-300">
                 {type === "transaction" && ( 
                    <>{
                    txAmountEligible.map((num, index) => {
                        if (num <= value) {
                            return (
                                <span key={index} className="text-emerald-300">
                                    {num}
                                    <span className="text-gray-300">{index !== txAmountEligible.length - 1 ? ' / ' : ''}</span>
                                </span>
                            )
                        } else {
                           return (
                           <span key={index}>
                            {num}
                            {index !== txAmountEligible.length - 1 ? ' / ' : ''}
                            </span>)
                        }
                    })
                    
                }</>)
                }
                 
                 {type === "time" && ( 
                    <>{
                    txOverTime.map((num, index) => {
                        if (num <= value) {
                            return (
                                <span key={index} className="text-emerald-300">
                                    {num}
                                    <span className="text-gray-300">{index !== txAmountEligible.length - 1 ? ' / ' : ''}</span>
                                </span>
                            )
                        } else {
                           return (
                           <span key={index}>
                            {num}
                            {index !== txAmountEligible.length - 1 ? ' / ' : ''}
                            </span>)
                        }
                    })
                    
                }
                <span>
                    months
                </span>
                </>
            
                )
                
              }

                </div>
            </div>
        </div>
    )
}

export default Eligibility;