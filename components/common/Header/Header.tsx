import HeaderUserPartSkeleton from "@/components/loading/HeaderUserPartSkeleton/HeaderUserPartSkeleton";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import SideBar from "../SideBar/SideBar";
import styles from "./header.module.scss";
import logo from "/public/images/logo.jpg";

const HeaderUserPart = dynamic(
  () => import('../HeaderUserPart/HeaderUserPart'),
  { 
    ssr: false,
    loading: () => <HeaderUserPartSkeleton/>
  })

const Header = () => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.side_bar_button}>
          <AiOutlineMenu
            size={40}
            onClick={() => setShowSideBar(!showSideBar)}
          />
        </div>
        <div className={styles.logo_box}>
          <Link href="/" aria-label="메인페이지로 이동">
            <Image role='main-link' src={logo} alt="보리쌀 로고" width={50} height={50}></Image>
          </Link>
        </div>
        <HeaderUserPart></HeaderUserPart>
      </div>
      {showSideBar && <SideBar setShowSideBar={setShowSideBar}></SideBar>}
    </>
  );
};

export default Header;
