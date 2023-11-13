/* eslint-disable react/prop-types */
import Input from './Input'
import Button from "./Button"
import {BiRename, BiSolidRename, BiSolidUser} from "react-icons/bi"
import {HiLockClosed} from "react-icons/hi"

export default function SignUpForm(props) {
    if (!props.isLogin) {
        return (
            <form className={`fixed top-0 right-[550px] left-0 bottom-0 flex flex-col items-center justify-center`}>
                <h1 className="text-5xl font-semibold mb-[100px]">Sign Up</h1>
                <Input placeholder="Name" icon={<BiRename />} />
                <Input placeholder="Surname" icon={<BiSolidRename />} />
                <Input placeholder="Email" icon={<BiSolidUser />} />
                <Input placeholder="Password" icon={<HiLockClosed />} />
                <div className="mt-[50px]">
                    <Button type="" label="Sign Up" />
                </div>
                
            </form>
        )
    }
  
}
