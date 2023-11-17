import { BsArrowUpRight } from 'react-icons/bs'
import {PiFiles} from 'react-icons/pi'

export default function EngagementTile() {
  return (
    <div className={`flex flex-col border-2 border-gray p-[20px] rounded-xl w-1/2`}>
        <div className={`bg-mustard text-white w-[45px] h-[45px] flex items-center justify-center rounded-full`}> 
        <PiFiles />
          </div>
          <h1 className={'text-base font-light mt-5'}>Total Active Claims</h1>
          <h1 className={'text-base mt-2 font-bold'}>102 / 200</h1>
          <h1 className={`flex items-center text-xs mt-2`}><a className={`text-[#d5731d] mr-2`}><BsArrowUpRight/></a> 5% increase from the last month</h1>
    </div>
  )
}

