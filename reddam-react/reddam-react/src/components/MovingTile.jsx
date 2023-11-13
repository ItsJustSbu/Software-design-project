/* eslint-disable react/prop-types */
import Button from "./Button"

export default function MovingTile(props) {
    const loginPrompt = "Embark on a Journey of Giving Back: Log in to Start. New here? Sign up below to create an account."
    const signupPrompt = "Embark on a Journey of Giving Back: Log in to Start. Already have an account? Login below..."
    return (
        <div className={`fixed w-[550px] flex flex-col items-center justify-center text-white ${props.isLogin? "bg-navy top-0 bottom-0 left-0": "bg-mustard top-0 bottom-0 right-0"}`}>
            <h1 className="text-4xl font-semibold mb-[70px]">{props.isLogin ? "Welcome Back!" : "Hello, there!"}</h1>
            <p className="w-4/5 text-lg text-center mb-[50px]">{props.isLogin ? loginPrompt : signupPrompt}</p>
            <Button label={props.isLogin ? "Sign Up" : "Log In"} onClick={props.updateIsLogin} borderColor="white"/>
        </div>
    )
}
