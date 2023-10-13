import Image from "next/image";
import { BiDollarCircle } from "react-icons/bi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/hi";
import Piecharts from "../components/Piecharts";
import List from "@/components/List";
import Bargraph from "@/components/Bargraph";

export default function Home() {
  return (
    <main className="flex flex-col p-2  ">
      <div className="flex flex-wrap justify-evenly  items-center lg:gap-0 gap-2">
        <div className="lg:w-56 w-44  h-28  bg-white p-2  rounded-md flex justify-center items-center gap-2">
          <div className="bg-green-100 lg:w-20 lg:h-20 w-16 h-16 rounded-full flex justify-center items-center">
            <BiDollarCircle className="text-3xl text-green-600" />
          </div>
          <div className="flex flex-col items-start justify-center text-xs">
            <span className="text-gray-300 font-medium text-xs">Earning</span>
            <span className="lg:text-lg text-xs font-semibold text-black">$123k</span>
            <p className="text-xs flex gap-1 items-center justify-start text-green-600 font-bold">
              <AiOutlineArrowUp className="text-xs"  />
              4%{" "}
              <span className="lg:text-sm text-[0.56rem] font-normal text-black">this month</span>
            </p>
          </div>
        </div>
        <div className="lg:w-56 w-44 h-28 bg-white p-2  rounded-md flex justify-center items-center gap-2">
          <div className="bg-violet-100 lg:w-20 lg:h-20 w-16 h-16 rounded-full flex justify-center items-center">
            <TbNotes className="text-3xl text-violet-600" />
          </div>
          <div className="flex flex-col items-start justify-center text-xs">
            <span className="text-gray-300 font-medium text-xs">Orders</span>
            <span className="lg:text-lg text-xs font-semibold text-black">$4.5k</span>
            <p className="flex gap-1 items-center justify-start text-red-600 font-bold">
              <AiOutlineArrowDown />
              4%{" "}
              <span className="lg:text-sm text-[0.56rem] font-normal text-black">this month</span>
            </p>
          </div>
        </div>
        <div className="lg:w-56 w-44 h-28 bg-white p-2  rounded-md flex justify-center items-center gap-2">
          <div className="bg-sky-100 lg:w-20 lg:h-20 w-16 h-16 rounded-full flex justify-center items-center">
            <MdOutlineAccountBalanceWallet className="text-3xl text-sky-600" />
          </div>
          <div className="flex flex-col items-start justify-center text-xs">
            <span className="text-gray-300 font-medium text-xs">Balance</span>
            <span className="lg:text-lg text-xs font-semibold text-black">$123k</span>
            <p className="flex gap-1 items-center justify-start text-red-600 font-bold">
              <AiOutlineArrowDown />
              4%{" "}
              <span className="lg:text-sm text-[0.56rem] font-normal text-black">this month</span>
            </p>
          </div>
        </div>
        <div className="lg:w-56 w-44 h-28 bg-white p-2  rounded-md flex justify-center items-center gap-2">
          <div className="bg-pink-100 lg:w-20 lg:h-20 w-16 h-16 rounded-full flex justify-center items-center">
            <HiOutlineShoppingBag className="text-3xl text-pink-600" />
          </div>
          <div className="flex flex-col items-start justify-center text-xs">
            <span className="text-gray-300 font-medium text-xs">
              Total sales
            </span>
            <span className="lg:text-lg text-xs font-semibold text-black">$143k</span>
            <p className=" text-xs flex gap-1 items-center justify-start text-green-600 font-bold">
              <AiOutlineArrowUp />
              12%{" "}
              <span className="lg:text-sm text-[0.56rem] font-normal text-black">this month</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row p-2 justify-evenly items-center gap-4 w-full mt-4">
        <div className="lg:w-[64%] w-full h-72 bg-white rounded-md  flex justify-center items-center">
          <Bargraph/>
        </div>
        <div className="lg:w-[30%] w-full h-72 p-3 bg-white rounded-md flex justify-center items-center">
          <Piecharts/>
        </div>
      </div>

    <List/>
    </main>
  );
}
