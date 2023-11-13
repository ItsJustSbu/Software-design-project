import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Dashboard() {
  const [pageName, setPageName] = useState("")
  const updatePageName = (newPageName) => {
    setPageName(newPageName);
  }
  return (
    <div className={`flex`}>
      <div>
        <Sidebar updatePageName={updatePageName}/>
      </div>
      <div className={`flex flex-col`}>
        <Navbar pageName={pageName} />
        <div className={`fixed left-[370px] top-[90px] right-[30px] bottom-[10px]`}>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}
