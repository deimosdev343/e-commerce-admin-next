import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import ProdcutIcon from '../assets/box.png'
import GrowthIcon from '../assets/growth.png'
import storeManagementLogo from '../assets/management.png';

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="w-full flex flex-col items-center justify-start">
        <h2 className="text-white font-bold text-5xl uppercase"> Store Management</h2>
        <Image src={storeManagementLogo} alt="logo" className="w-[8%] m-5"/>
      </div>
      <div className="w-[90%] grid grid-cols-2 gap-5 p-5">
        
      </div>
    </div>
  );
}
