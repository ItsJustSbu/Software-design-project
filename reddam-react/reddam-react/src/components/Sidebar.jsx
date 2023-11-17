/* eslint-disable react/prop-types */
import { LuLayoutDashboard } from 'react-icons/lu'
import {IoExitOutline} from 'react-icons/io5'
import logo from './../assets/reddam-dashboard.svg'
import { useNavigate } from 'react-router-dom'
import { GoPeople } from 'react-icons/go'
import { MdOutlineAdminPanelSettings} from 'react-icons/md'
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2'
import { PiStudent} from 'react-icons/pi'
import { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'

const navItems = [
    { item: 'Dashboard', path: '/dashboard/home', icon: < LuLayoutDashboard />},
    { item: 'Learners', path: '/dashboard/learners', icon: < GoPeople /> },
    { item: 'Admin', path: '/dashboard/admin', icon: < MdOutlineAdminPanelSettings /> },
    { item: 'Claims', path: '/dashboard/claims', icon: < HiOutlineClipboardDocumentList/> },
    { item: 'Classes', path: '/dashboard/classes', icon: < PiStudent /> },
]

export default function Sidebar(props) {
    const navigate = useNavigate();
    const [clicked, setClicked] = useState(0);

    const logout = (e) => {
        e.preventDefault();
        navigate("/");
    }

    props.updatePageName(navItems[clicked].item)

  return (
      <nav className={`bg-navy w-[340px] fixed top-0 bottom-0 left-0 flex flex-col items-center`}>
          <img className="mt-[30px] h-[40px]" src={logo} />
            <ul className={`mt-[100px]`}>
                {navItems.map((navItem, index) => (
                    <li key={index}>
                        <button className={`${clicked == index ? "bg-white text-mustard" : " text-white"} mb-2 text-lg flex items-center h-[55px] w-[230px] pl-[20px] font-light rounded-full hover:bg-white hover:text-mustard`} onClick={() => { navigate(navItem.path); setClicked(index) } }>
                            <h1 className={`text-2xl mr-[20px] `}>{navItem.icon}</h1>
                            <h1 className={``}>{navItem.item}</h1>
                        </button>
                    </li>
                ))}
          </ul>
         <button className={` absolute text-3xl text-white bottom-[30px]`} onClick={logout}>
              <IoExitOutline/>
                </button>
          <button className={`absolute top-[30px] left-[325px] bg-white rounded-full h-[30px] w-[30px] flex items-center justify-center shadow-2xl drop-shadow-2xl outline-gray border border-[#D4D3D3]`}>
              <IoIosArrowBack />
          </button>
        </nav>
  )
}
