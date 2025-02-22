import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import ProdcutIcon from '../assets/box.png'
import GrowthIcon from '../assets/growth.png'
import storeManagementLogo from '../assets/management.png';
import LinkBox from "./components/LinkBox";
import { cookies } from "next/headers";
import TopBar from "./components/TopBar";

export default async function Home() {

  return (
    <div className="w-full h-screen flex flex-col items-center">
     <TopBar />
      <div className="w-full md:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
        <LinkBox  
          title={"Products"}
          link={'/products'}
          image={ProdcutIcon}
        />
        <LinkBox
          title={"Sales"}
          link={'/sales'}
          image={GrowthIcon}
        />
        <LinkBox
          title={"Departments"}
          link={'/category'}
          image={GrowthIcon}
        />
      </div>
    </div>
  );
}
