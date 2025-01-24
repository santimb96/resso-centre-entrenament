import { FaArrowRight, FaArrowUp } from 'react-icons/fa6'
import { IoCalendarOutline, IoCloseOutline } from 'react-icons/io5'
import { MdOutlinePlace } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'


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