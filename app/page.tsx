import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import ProdcutIcon from '../assets/box.png'
import GrowthIcon from '../assets/growth.png'
import storeManagementLogo from '../assets/management.png';
import LinkBox from "../components/LinkBox";
import { cookies } from "next/headers";
import TopBar from "../components/TopBar";
import MostViewedItemsComponent from "@/components/statistics/MostViewedItemsComponent";
import MostPurchasedItemsComponent from "@/components/statistics/MostPurchasedItemsComponent";
import ViewsAndOrdersByDateComponent from "@/components/statistics/ViewsAndOrdersByDateComponent";
import SideBar from "@/components/SideBar";

export default async function Home() {

  return (

    <div className="w-full h-screen flex  items-center">
      <SideBar/>
      <div className="flex flex-col w-full h-screen items-center">
        <div className="w-full flex items=center justify-center gap-5 p-5">
          <LinkBox  
            title={"Go To Products"}
            link={'/products'}
            image={ProdcutIcon}
          />     
        </div>
        <div className='w-full flex gap-4 p-5 h-[40%]'>
          <MostViewedItemsComponent/>
          <MostPurchasedItemsComponent/>
        </div>
        <div className='w-full flex gap-2 px-5'>
          <ViewsAndOrdersByDateComponent/>
        </div>
      </div>

      </div>
  );
}
