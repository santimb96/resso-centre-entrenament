import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import { FaArrowRight, FaArrowUp } from 'react-icons/fa6'
import { IoMdCheckmarkCircle, IoMdCloseCircle } from 'react-icons/io'
import { IoCalendarOutline, IoCloseOutline } from 'react-icons/io5'
import { LuMouse } from 'react-icons/lu'
import { MdOutlinePlace } from 'react-icons/md'
import { RxCaretDown, RxHamburgerMenu } from 'react-icons/rx'




export function Hamburger () {
  return <RxHamburgerMenu size={24} />
}

export function Close () {
  return <IoCloseOutline size={30} />
}

export function ArrowUp () {
  return <FaArrowUp size={24} />
}

export function ArrowRightHamMenu () {
  return <FaArrowRight size={16} />
}

export function Location ({size = 24}) {
  return <MdOutlinePlace size={size} />
}

export function Calendar ({size = 24}) {
  return <IoCalendarOutline size={size} />
}

export function Mouse ({size = 24}) {
  return <LuMouse size={size} />
}

export function CaretDown ({size = 24}) {
  return <RxCaretDown size={size} />
}

export function CheckCircle ({size = 24}) {
  return <IoMdCheckmarkCircle size={size} />
}

export function CloseCircle ({size = 24}) {
  return <IoMdCloseCircle size={size} />
}

export function Instagram ({size = 24}) {
  return <FaInstagram size={size} />
}

export function Facebook ({size = 24}) {
  return <FaFacebookSquare size={size} />
}