import { BsTelephone } from 'react-icons/bs'
import { FaInstagram, FaRegClock, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { FaArrowRight, FaArrowUp, FaSquareFacebook } from 'react-icons/fa6'
import { IoMdCheckmarkCircle, IoMdCloseCircle } from 'react-icons/io'
import { IoCalendarOutline, IoCloseOutline } from 'react-icons/io5'
import { LuMouse } from 'react-icons/lu'
import { MdOutlineEmail, MdOutlinePlace } from 'react-icons/md'
import { RxCaretDown, RxHamburgerMenu } from 'react-icons/rx'

export function Hamburger ({size = 24}) {
  return <RxHamburgerMenu size={size} />
}

export function Close ({size = 24}) {
  return <IoCloseOutline size={size} />
}

export function ArrowUp ({size = 24}) {
  return <FaArrowUp size={size} />
}

export function ArrowRightHamMenu ({size = 24}) {
  return <FaArrowRight size={size} />
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
  return <FaSquareFacebook size={size} />
}

export function Mail ({size = 24}) {
  return <MdOutlineEmail size={size} />
}

export function Youtube ({size = 24}) {
  return <FaYoutube size={size} />
}

export function Tiktok ({size = 24}) {
  return <FaTiktok size={size} />
}

export function Clock ({size = 24}) {
  return <FaRegClock size={size} />
}

export function Tlf ({size = 24}) {
  return <BsTelephone size={size} />
}

export function Whatsapp ({size = 24}) {
  return <FaWhatsapp size={size} />
}
