/* eslint-disable react/prop-types */
import { AiOutlineSearch } from 'react-icons/ai'
import profilePicture from './../assets/profile.svg'

export default function Navbar(props) {
  return (
      <div className={`fixed px-[30px] left-[340px] right-0 h-[80px] flex justify-between items-center border-b-2 border-[#EEEEEE] `}>
          <h1 className={`font-semibold text-2xl flex-none`}> {props.pageName}</h1>
          <div className="flex items-center flex-grow mx-[70px] min-w-[600px] bg-gray border border-darkerGray justify-between px-[10px] h-[50px] rounded-full">
              <input className="bg-gray w-full placeholder:text-base placeholder:text-black outline-none" placeholder="Search for learner, admin, claim..." />
              <AiOutlineSearch className='text-2xl'/>
          </div>
          <div className={`flex bg-gray border border-darkerGray items-center rounded-full px-[5px] pr-5 h-[50px]`}>
              <img src={profilePicture} className="h-[40px] w-[40px] rounded-full mr-3" />
              <div>
                  <h1 className={`text-base `}>Connel Manhica</h1>
                  <p className={`text-xs text-slate-500`}>Administrator</p>
              </div>
          </div>
      </div>
  )
}
