'use client'
import React from "react";
import { useSelector } from "react-redux";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";

import _ from "lodash";



export default function Layout({ children }) {
  const isOpenSideBar = useSelector((state) => state.button.sideBar);
 return (

    <>


      <div className="h-screen min-h-">
        <TopBar />
        <div className="flex relative" style={{ height: "calc(100vh - 55px)" }}>
          <SideBar isOpen={isOpenSideBar} />
          <main className="overflow-y-scroll mt-3 flex flex-col relative md:px-5 w-full">
            {children}
          </main>
        </div>
        <BottomBar />
      </div>

    </>
  );
}
