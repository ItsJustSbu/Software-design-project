import { VscGraph } from 'react-icons/vsc'
import {BsArrowUpRight} from 'react-icons/bs'

export default function EngagementTile() {
  return (
    <div className={`flex flex-col border-2 border-gray p-[20px] rounded-xl w-1/2`}>
        <div className={`bg-mustard text-white w-[45px] h-[45px] flex items-center justify-center rounded-full`}>
           <VscGraph/>   
          </div>
          <h1>Total Community Engagement</h1>
          <h1>530000</h1>
          <h1 className={`flex items-center `}><a className={`text-green`}><BsArrowUpRight/></a> 12% increase from the last month</h1>
    </div>
  )
}
