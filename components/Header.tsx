import Nav from "./Nav"
import Link from "next/link"
import { memo } from "react"
import Image from "next/image"
import { MainTitle1,MainTitle2 } from "@/data/HeaderData"

function Header() {
  return (
    <header className='z-50 px-[4vmin] flex justify-between items-center w-full sticky top-0 left-0 shadow-md bg-black text-white'>
      <Link href="/" className="flex space-x-[1vmin] items-center">

        <Image src="/icon.jpg" height={70} width={70} alt="BlazeSites logo" className="h-[12vmin] sm:h-[10vmin] md:h-[7vmin] w-[12vmin] sm:w-[10vmin] md:w-[7vmin]"/>

        <h1 className='font-extrabold text-[4.5vmin] sm:text-[4vmin]'>{MainTitle1}<span className="text-blue-500">{MainTitle2}</span></h1>
      </Link>

      <Nav />
    </header>
  )
}

export default memo(Header)