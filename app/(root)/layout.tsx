import MobileNav from "@/components/shared/MobileNav";
import RightSideBar from "@/components/shared/RightSideBar";
import Sidebar from "@/components/shared/Sidebar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="root">
      <Sidebar />
      <MobileNav />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
      <RightSideBar />
    </div>
  );
}
export default layout;