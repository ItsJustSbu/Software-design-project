import { useState } from "react"
import SignUpForm from "../components/SignUpForm"
import MovingTile from "../components/MovingTile"
import LoginForm from "../components/LoginForm"

export default function Welcome() {
  const [isLogin, setIsLogin] = useState(true)

  const updateIsLogin = () => {
    setIsLogin(!isLogin)
  };

  return (
    <div className={`flex fixed`}>
      <SignUpForm isLogin={isLogin} />
      <MovingTile isLogin={isLogin} updateIsLogin={updateIsLogin}/>
      <LoginForm isLogin={isLogin} />
    </div>
  )
}
