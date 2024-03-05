'use client'

import WalletList from "@/app/components/walletList";
import { useStateProvider } from "@/app/contexts/StateContext";

const ListWallets = () => {


    return (
      <div className="w-full h-full text-white p-5">
        <div className="w-full h-full">
          <div className="w-full flex flex-col border border-gray-300 border-opacity-30 rounded-lg h-80 max-w-[950px] mx-auto overflow-x-auto overflow-y-auto custom-scroll">
            <div className="flex flex-row justify-between text-sm text-gray-300 min-w-[950px] bg-emerald-950 p-4">
              <div className="flex-grow-1 flex-shrink-0 flex-basis-0 flex justify-center min-w-[120px]">
                Wallet
              </div>
              <div className="flex-grow-1 flex-shrink-0 flex-basis-0 flex justify-center min-w-[100px]">
                Total Tx
              </div>
              <div className="flex-grow-1 flex-shrink-0 flex-basis-0 flex justify-start min-w-[100px]">
                Over time Tx
              </div>
              <div className="flex-grow-1 flex-shrink-0 flex-basis-0 flex justify-start min-w-[50px]">
                Wallet Age
              </div>
              <div className="flex-grow-1 flex-shrink-0 flex-basis-0 flex justify-start min-w-[50px]">
                Last Tx
              </div>
              <div className="flex-grow-1 flex-shrink-0 flex-basis-0 flex justify-start min-w-[10px]">
                Galxe Points
              </div>
              <div className="flex-grow-1 flex-shrink-0 flex-basis-0 flex justify-start min-w-[120px]">
                Pandra King Holder
              </div>
            </div>
            <div className="w-full flex-grow-1 auto p-2 gap-2 mb-2">
              {/* Repeat the following block for each row */}
              <div className="w-full flex flex-col justify-between gap-2">
                <WalletList wallet={"0xe59f09...a14df588"} total={66} time={"38 / 6 / 3"} walletAge={"123 day"} LastTx={"12.02.2024"} galxePoints={525} pandraHolder={false}/>                
                <WalletList wallet={"0xe59f09...a14df588"} total={66} time={"38 / 6 / 3"} walletAge={"123 day"} LastTx={"12.02.2024"} galxePoints={525} pandraHolder={true}/>                
                <WalletList wallet={"0xe59f09...a14df588"} total={66} time={"38 / 6 / 3"} walletAge={"123 day"} LastTx={"12.02.2024"} galxePoints={525} pandraHolder={true}/>                
                <WalletList wallet={"0xe59f09...a14df588"} total={66} time={"38 / 6 / 3"} walletAge={"123 day"} LastTx={"12.02.2024"} galxePoints={525} pandraHolder={true}/>                
                <WalletList wallet={"0xe59f09...a14df588"} total={66} time={"38 / 6 / 3"} walletAge={"123 day"} LastTx={"12.02.2024"} galxePoints={525} pandraHolder={true}/>                
                <WalletList wallet={"0xe59f09...a14df588"} total={66} time={"38 / 6 / 3"} walletAge={"123 day"} LastTx={"12.02.2024"} galxePoints={525} pandraHolder={true}/>                
              </div>
              {/* End of block */}
              {/* Add more blocks as needed */}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ListWallets;