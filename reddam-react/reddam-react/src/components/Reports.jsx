import { GoDownload } from "react-icons/go";
import { PiEyeBold } from "react-icons/pi";

export default function Reports() {
  return (
      <div className={'border-2 border-gray p-[30px] font-light rounded-xl'}>
          <h1 className={'text-xl font-semibold mb-4'}>Reports</h1>
          <div className={'flex justify-between'}>
              Claims
              <div className={'flex gap-3'}>
                  <GoDownload />
                  <PiEyeBold />
              </div>
          </div>
          <div className={'flex justify-between'}>
              Community Engagements
              <div className={'flex gap-3'}>
                  <GoDownload />
                  <PiEyeBold />
              </div>
          </div>
          <div className={'flex justify-between'}>
              Classes
              <div className={'flex gap-3'}>
                  <GoDownload />
                  <PiEyeBold />
              </div>
          </div>
          
      </div>
  )
}
