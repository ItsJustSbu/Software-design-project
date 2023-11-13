/* eslint-disable react/prop-types */
import {useNavigate} from "react-router-dom"
import Input from "./Input";
import {BiSolidUser} from "react-icons/bi"
import {HiLockClosed} from "react-icons/hi"
import Button from "./Button";

export default function LoginForm(props) {
    const navigate = useNavigate();

    const processLogin = () => {
        event.preventDefault();
        //navigate to the dashboard page
        navigate("/dashboard/home");
    };


    if (props.isLogin) {
        return (
            <form className={`fixed top-0 left-[550px] right-0 bottom-0 flex flex-col items-center justify-center`}>
                <h1 className="text-5xl font-semibold mb-[100px]">Log In</h1>
                <Input placeholder="Email" icon={<BiSolidUser />} />
                <Input placeholder="Password" icon={<HiLockClosed />} />
                <div className="mt-[50px]">
                    <Button type="submit" label="Log In" onClick={processLogin} />
                </div>
                
            </form>
        )
    }
}
