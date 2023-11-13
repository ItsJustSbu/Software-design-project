/* eslint-disable react/prop-types */


export default function Input(props) {
  return (
    <div className={`flex items-center bg-gray h-[60px] w-[450px] rounded-lg mb-[25px]`}>
          <h1 className="text-3xl pl-2 pr-3">{props.icon}</h1>
          <input type="text" placeholder={props.placeholder} className={`bg-gray h-[45px] w-[400px] border-0 outline-none `} />
    </div>
  )
}
