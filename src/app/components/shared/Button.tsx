import { FC } from "react"


const Button:FC<{text:string}> = ({text}) => {
  return (
    <button className="text-white bg-teal-900 hover:bg-teal-700 px-4 py-3 rounded-full max-w-40">{text}</button>
  )
}

export default Button