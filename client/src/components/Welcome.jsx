import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import {SiEthereum} from 'react-icons/si'
import {BsInfoCircle} from 'react-icons/bs'
import { Loader } from './';

function Welcome() {
  const connectWallet = () => {
    // Logic to connect wallet goes here
    console.log("Connect Wallet clicked");
  };
  return (
   <div className='flex w-full justify-center items-center'>
    <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
      <div className="flex flex-1 justify-start flex-col md:mr-10">
        <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
          Send Crypto <br /> across the world
        </h1>
        <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
          Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
        </p>
        <button onClick={connectWallet} type="button" className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
          {/* <AiFillPlayCircle className="text-white mr-2" /> */}
          <p className="text-white text-base font-semibold">Connect Wallet</p>
        </button>

        <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
          <div className="rounded-tl-2xl border-2 border-[#3a3a3a] flex justify-center items-center h-40 sm:mb-0 mb-4">
            <SiEthereum className="text-white" fontSize={21} />
          </div>
          <div className="rounded-tr-2xl border-2 border-[#3a3a3a] flex justify-center items-center h-40 sm:mb-0 mb-4">
            <BsInfoCircle className="text-white" fontSize={21} />
          </div>
          <div className="rounded-br-2xl border-2 border-[#3a3a3a] flex justify-center items-center h-40 sm:mb-0 mb-4">
            <Loader />
          </div>

        </div>
      </div>
    </div>
   </div>
  )
}

export default Welcome