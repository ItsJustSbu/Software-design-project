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
/*
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import { BiSolidUser } from "react-icons/bi";
import { HiLockClosed } from "react-icons/hi";
import Button from "./Button";

export default function LoginForm(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const processLogin = async (event) => {
    event.preventDefault();

    try {
      // Make a POST request to your authentication endpoint
      const response = await fetch("https://reddam.agreeableplant-3f520c83.southafricanorth.azurecontainerapps.io/teacherlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        // Successful login, navigate to the dashboard page
        navigate("/dashboard/home");
      } else {
        // Handle unsuccessful login (display error message, redirect, etc.)
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  if (props.isLogin) {
    return (
      <form className={`fixed top-0 left-[550px] right-0 bottom-0 flex flex-col items-center justify-center`}>
        <h1 className="text-5xl font-semibold mb-[100px]">Log In</h1>
        <Input
          placeholder="Email"
          icon={<BiSolidUser />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          icon={<HiLockClosed />}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="mt-[50px]">
          <Button type="submit" label="Log In" onClick={processLogin} />
        </div>
      </form>
    );
  }
}*/

