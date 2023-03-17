import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Link from "next/link";
import styles from "./header.module.scss";
import Image from "next/image";
import logo from "/public/images/logo.jpg";
import SideBar from "../SideBar/SideBar";
import UserBar from "@/components/user/UserBar/UserBar";
import LoginButton from "@/components/user/LoginButton/LoginButton";

const Header = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const { user } = useSelector((state: RootState) => state.userStore);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.side_bar_button}>
          <AiOutlineMenu
            size={30}
            onClick={() => setShowSideBar(!showSideBar)}
          />
        </div>
        <div className={styles.logo_box}>
          <Link href="/" aria-label="메인페이지로 이동">
            <Image role='main-link' src={logo} alt="보리쌀 로고" width={50} height={50}></Image>
          </Link>
        </div>
        {user.id.length > 3 ? (
          <UserBar></UserBar>
        ) : (
          <LoginButton></LoginButton>
        )}
      </div>
      {showSideBar && <SideBar setShowSideBar={setShowSideBar}></SideBar>}
    </>
  );
};

export default Header;
