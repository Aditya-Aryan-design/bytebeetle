import Nav from "./Nav"
import Link from "next/link"
import { memo } from "react"
import Image from "next/image"
import { MainTitle1,MainTitle2 } from "@/data/HeaderData"

function Header() {
  return (
    <header className='z-50 px-[4vmin] flex justify-between items-center w-full sticky top-0 left-0 shadow-md bg-white'>
      <Link href="/" className="flex space-x-[1vmin] items-center">

        <Image src="/icon.jpg" height={70} width={70} alt="BlazeSites logo" className="h-[7vmin] w-[7vmin]"/>
        <h1 className='font-bold text-[4.5vmin] sm:text-[4vmin]'>{MainTitle1}<span className="text-teal-600">{MainTitle2}</span></h1>
      </Link>

      <Nav />
    </header>
  )
}

export default memo(Header)