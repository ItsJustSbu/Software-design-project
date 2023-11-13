import { IoIosArrowDown } from "react-icons/io";
import EngagementTile from "../components/EngagementTile";
import ActiveCalimsTile from "../components/ActiveClaims";
import TopClasses from "../components/TopClasses";
import TopCommunityEngagers from "../components/TopCommunityEngagers";


export default function Home() {
  return (
    <div>
      <div className={`flex justify-between items-center`}>
          <h1 className={`text-xl font-semibold`}>Overview</h1>
          <div className={`flex items-center bg-gray px-5 py-3 rounded-full border border-darkerGray text-sm`}>
              Last 30 Days
              <IoIosArrowDown className="ml-[15px]"/>
          </div>
          
      </div>
      <div className={`flex mt-[30px] justify-between`}>
        <div className={`basis-7/12`}>
            <div className={`flex gap-[30px] `}>
              <EngagementTile />
              <ActiveCalimsTile/>
            </div>
            <div>
              <TopCommunityEngagers/>
            </div>
        </div>
        <div className="bg-mustard basis-5/12">
          <TopClasses/>
        </div>
          </div>
    </div>
  )
}
