/* eslint-disable react/prop-types */


export default function Button(props) {
  return (
  
    <button className={`border border-${props.borderColor} w-[120px] h-[50px] rounded-fulf`} onClick={props.onClick}>
      {props.label}
    </button>
    )
}
