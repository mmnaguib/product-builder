import { HTMLAttributes } from "react"

interface IProps extends HTMLAttributes<HTMLSpanElement> {
    color: string
}
const CircleColor = ({color, ...rest}: IProps) => {
  return (
    <span className="block w-5 h-5 rounded-full cursor-pointer" style={{ background: color,marginRight: '10px' }} {...rest}></span>
  )
}

export default CircleColor
